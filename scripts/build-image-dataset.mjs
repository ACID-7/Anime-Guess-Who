import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(process.cwd());
const dataFile = path.join(root, 'js', 'data.js');
const outputFile = path.join(root, 'images', 'character-image-dataset.json');
const idBatchSize = 20;
const nameBatchSize = 20;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSearchTerms(name) {
  const base = String(name || '');
  const terms = new Set([base.trim()]);
  base.split('/').map(part => part.trim()).filter(Boolean).forEach(part => terms.add(part));
  base.split(',').map(part => part.trim()).filter(Boolean).forEach(part => terms.add(part));
  const withoutParens = base.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  if (withoutParens) terms.add(withoutParens);
  return [...terms].filter(Boolean);
}

function gqlEscape(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

function tokenSet(value) {
  return new Set(normalizeName(value).split(' ').filter(Boolean));
}

function animeTitleMatch(animeName, mediaNodes) {
  const animeTokens = tokenSet(animeName);
  if (!animeTokens.size) return false;
  for (const node of mediaNodes || []) {
    const titles = [node?.title?.romaji, node?.title?.english, node?.title?.native].filter(Boolean);
    for (const title of titles) {
      const titleTokens = tokenSet(title);
      const shared = [...animeTokens].filter(token => titleTokens.has(token)).length;
      if (shared >= 1) return true;
    }
  }
  return false;
}

function isLikelyNameMatch(expected, actual) {
  const expectedNorm = normalizeName(expected);
  const actualNorm = normalizeName(actual);
  if (!expectedNorm || !actualNorm) return false;
  if (expectedNorm === actualNorm) return true;

  const a = tokenSet(expectedNorm);
  const b = tokenSet(actualNorm);
  if (a.size >= 2 && b.size >= 2 && (expectedNorm.includes(actualNorm) || actualNorm.includes(expectedNorm))) {
    return true;
  }
  const shared = [...a].filter(token => b.has(token)).length;
  if (shared >= 2) return true;
  if (shared >= 1 && a.size === 1 && b.size === 1) return true;
  return false;
}

async function postAniList(query, variables = null, retries = 6) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const res = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (res.status === 429) {
      await sleep(2500 * (attempt + 1));
      continue;
    }

    const payload = await res.json().catch(() => null);
    if (!payload?.data) {
      if (attempt < retries) {
        await sleep(1000 * (attempt + 1));
        continue;
      }
      throw new Error(`AniList request failed with ${res.status}`);
    }
    return payload;
  }

  throw new Error('AniList request exceeded retries');
}

async function loadAnimes() {
  const code = await fs.readFile(dataFile, 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${code}\nthis.__ANIMES__ = ANIMES;`, context);
  return context.__ANIMES__;
}

async function fetchIdMap(ids) {
  const map = {};
  for (let i = 0; i < ids.length; i += idBatchSize) {
    const slice = ids.slice(i, i + idBatchSize);
    const aliases = slice
      .map((id, index) => `c${index}: Character(id:${id}) { id name { full } image { large medium } }`)
      .join('\n');

    let payload = null;
    try {
      payload = await postAniList(`{ ${aliases} }`);
    } catch (error) {
      console.warn(`ID batch failed at ${i + 1}-${i + slice.length}: ${error.message}`);
    }

    slice.forEach((id, index) => {
      const item = payload?.data?.[`c${index}`];
      map[id] = {
        id: item?.id || id,
        name: item?.name?.full || null,
        image: item?.image?.large || item?.image?.medium || null,
      };
    });

    process.stdout.write(`ID pass ${Math.min(i + slice.length, ids.length)}/${ids.length}\r`);
  }
  process.stdout.write('\n');
  return map;
}

async function resolveByNameBatch(chars) {
  const results = new Map();
  for (let i = 0; i < chars.length; i += nameBatchSize) {
    const slice = chars.slice(i, i + nameBatchSize);
    const aliases = slice.map((char, index) => {
      const search = getSearchTerms(char.name)[0] || char.name;
      return `p${index}: Page(perPage:5) {
        characters(search:"${gqlEscape(search)}", sort:[FAVOURITES_DESC]) {
          id
          name { full }
          image { large medium }
          media(perPage:3) {
            nodes {
              title { romaji english native }
            }
          }
        }
      }`;
    }).join('\n');

    const payload = await postAniList(`{ ${aliases} }`).catch(() => null);
    if (!payload?.data) {
      slice.forEach(char => results.set(char.key, null));
      continue;
    }

    slice.forEach((char, index) => {
      const candidates = payload.data[`p${index}`]?.characters || [];
      const filtered = candidates.filter(item => {
        const name = item?.name?.full || '';
        const image = item?.image?.large || item?.image?.medium || null;
        return Boolean(image) && !image.includes('default') && isLikelyNameMatch(char.name, name);
      });

      if (!filtered.length) {
        results.set(char.key, null);
        return;
      }

      const best =
        filtered.find(item => animeTitleMatch(char.animeName, item?.media?.nodes || [])) ||
        filtered[0];
      const name = best?.name?.full || null;
      const image = best?.image?.large || best?.image?.medium || null;

      results.set(char.key, {
        id: best?.id || null,
        name,
        image,
        source: 'search',
      });
    });

    process.stdout.write(`Name pass ${Math.min(i + slice.length, chars.length)}/${chars.length}\r`);
  }
  process.stdout.write('\n');
  return results;
}

function getAnimeSearchTerms(animeName) {
  const base = String(animeName || '').trim();
  const terms = new Set([base]);
  base.split('&').map(part => part.trim()).filter(Boolean).forEach(part => terms.add(part));
  base.split(':').map(part => part.trim()).filter(Boolean).forEach(part => terms.add(part));
  const withoutParens = base.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  if (withoutParens) terms.add(withoutParens);
  return [...terms].filter(Boolean);
}

async function resolveByAnimeRoster(chars) {
  const results = new Map();
  const cache = new Map();

  for (const char of chars) {
    const cacheKey = normalizeName(char.animeName);

    if (!cache.has(cacheKey)) {
      const terms = getAnimeSearchTerms(char.animeName);
      const merged = [];

      for (const term of terms) {
        let page = 1;
        let lastPage = 1;
        const found = [];
        let media = null;

        do {
          const query = `
            query AnimeCharacters($search: String, $page: Int) {
              Media(search: $search, type: ANIME) {
                id
                title { romaji english native }
                characters(sort:[ROLE,RELEVANCE], page:$page, perPage:100) {
                  pageInfo { currentPage lastPage hasNextPage }
                  nodes {
                    id
                    name { full }
                    image { large medium }
                  }
                }
              }
            }
          `;
          const payload = await postAniList(query, { search: term, page }).catch(() => null);
          media = payload?.data?.Media || null;
          const pageInfo = media?.characters?.pageInfo;
          const pageNodes = media?.characters?.nodes || [];
          if (!media || !pageNodes.length) break;

          found.push(...pageNodes);
          lastPage = pageInfo?.lastPage || page;
          page += 1;
        } while (page <= lastPage);

        if (media && animeTitleMatch(char.animeName, [media])) {
          merged.push(...found);
        }
      }

      cache.set(cacheKey, [...new Map(merged.map(item => [item.id, item])).values()]);
    }

    const candidates = cache.get(cacheKey) || [];
    const best = candidates.find(item => isLikelyNameMatch(char.name, item?.name?.full || ''));
    const name = best?.name?.full || null;
    const image = best?.image?.large || best?.image?.medium || null;

    results.set(char.key, best?.id && image ? {
      id: best.id,
      name,
      image,
      source: 'anime',
    } : null);
  }

  return results;
}

async function main() {
  const animes = await loadAnimes();
  const chars = animes.flatMap(anime =>
    anime.chars.map(char => ({
      key: `${anime.id}::${normalizeName(char.name)}`,
      animeId: anime.id,
      animeName: anime.name,
      name: char.name,
      anilist: char.anilist || null,
      manual: char.img || null,
    }))
  );

  const ids = [...new Set(chars.map(char => char.anilist).filter(Boolean))];
  const idMap = await fetchIdMap(ids);

  const items = [];
  const unresolved = [];

  for (const char of chars) {
    if (char.manual) {
      items.push({
        animeId: char.animeId,
        animeName: char.animeName,
        name: char.name,
        anilist: char.anilist,
        resolvedName: char.name,
        image: char.manual,
        hasImage: true,
        source: 'manual',
      });
      continue;
    }

    if (char.anilist && idMap[char.anilist]) {
      const meta = idMap[char.anilist];
      if (meta.image && !meta.image.includes('default') && isLikelyNameMatch(char.name, meta.name)) {
        items.push({
          animeId: char.animeId,
          animeName: char.animeName,
          name: char.name,
          anilist: meta.id,
          resolvedName: meta.name,
          image: meta.image,
          hasImage: true,
          source: 'id',
        });
        continue;
      }
    }

    unresolved.push(char);
  }

  const byAnimeRoster = await resolveByAnimeRoster(unresolved);
  const byName = await resolveByNameBatch(unresolved.filter(char => !byAnimeRoster.get(char.key)?.image));
  unresolved.forEach(char => {
    const found = byAnimeRoster.get(char.key) || byName.get(char.key);
    items.push({
      animeId: char.animeId,
      animeName: char.animeName,
      name: char.name,
      anilist: found?.id || char.anilist,
      resolvedName: found?.name || null,
      image: found?.image || null,
      hasImage: Boolean(found?.image),
      source: found?.source || 'none',
    });
  });

  items.sort((a, b) => (a.animeId + a.name).localeCompare(b.animeId + b.name));
  await fs.mkdir(path.dirname(outputFile), { recursive: true });

  const withImages = items.filter(item => item.hasImage).length;
  const missing = items.length - withImages;
  const byIdCount = items.filter(item => item.source === 'id').length;
  const bySearchCount = items.filter(item => item.source === 'search').length;
  const manualCount = items.filter(item => item.source === 'manual').length;
  const byAnime = items.reduce((acc, item) => {
    const key = item.animeId;
    if (!acc[key]) {
      acc[key] = { animeName: item.animeName, total: 0, withImage: 0, missing: 0 };
    }
    acc[key].total += 1;
    if (item.hasImage) acc[key].withImage += 1;
    else acc[key].missing += 1;
    return acc;
  }, {});

  await fs.writeFile(
    outputFile,
    JSON.stringify({
      version: 1,
      generatedAt: new Date().toISOString(),
      totals: {
        total: items.length,
        withImages,
        missing,
        source: { id: byIdCount, search: bySearchCount, manual: manualCount },
      },
      byAnime,
      items,
    }, null, 2)
  );
  console.log(`Dataset written: ${outputFile}`);
  console.log(`Total: ${items.length}`);
  console.log(`With images: ${withImages}`);
  console.log(`Missing: ${missing}`);
  console.log(`Sources -> id: ${byIdCount}, search: ${bySearchCount}, manual: ${manualCount}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
