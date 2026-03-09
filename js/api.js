/**
 * api.js - Single-source AniList image loader + dataset helpers.
 *
 * Resolution order:
 * 1) Manual override (char.img)
 * 2) AniList by ID (batched)
 * 3) AniList by name search (for bad/missing IDs)
 * 4) Emoji fallback in UI
 */

const IMG_CACHE = {};
const META_CACHE = {};
const NAME_IMG_CACHE = {};
const DATASET_CACHE = {};
const BATCH_SIZE = 40;
let LOCAL_DATASET_LOOKUP = null;
let LOCAL_DATASET_LOADING = null;

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

function getNameVariants(name) {
  const base = String(name || '');
  const variants = new Set([base]);

  base.split('/').map(part => part.trim()).filter(Boolean).forEach(part => variants.add(part));
  base.split(',').map(part => part.trim()).filter(Boolean).forEach(part => variants.add(part));

  const withoutParens = base.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  if (withoutParens) variants.add(withoutParens);

  return [...variants].map(normalizeName).filter(Boolean);
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
  const actualNorm = normalizeName(actual);
  if (!actualNorm) return false;

  const expectedVariants = getNameVariants(expected);
  if (expectedVariants.includes(actualNorm)) return true;

  for (const variant of expectedVariants) {
    if (variant.length >= 5 && (variant.includes(actualNorm) || actualNorm.includes(variant))) {
      return true;
    }

    const expectedTokens = tokenSet(variant);
    const actualTokens = tokenSet(actualNorm);
    const shared = [...expectedTokens].filter(token => actualTokens.has(token)).length;
    if (shared >= 2) return true;
    if (shared >= 1 && expectedTokens.size === 1 && actualTokens.size === 1) return true;
  }

  return false;
}

function getCachedNameImage(charName) {
  const variants = getNameVariants(charName);
  for (const variant of variants) {
    if (NAME_IMG_CACHE[variant]) return NAME_IMG_CACHE[variant];
  }
  return null;
}

function localKey(animeId, charName) {
  return `${animeId}::${normalizeName(charName)}`;
}

async function ensureLocalDatasetLoaded() {
  if (LOCAL_DATASET_LOOKUP) return LOCAL_DATASET_LOOKUP;
  if (LOCAL_DATASET_LOADING) return LOCAL_DATASET_LOADING;

  LOCAL_DATASET_LOADING = (async () => {
    try {
      const res = await fetch('images/character-image-dataset.json', { cache: 'no-store' });
      if (!res.ok) {
        LOCAL_DATASET_LOOKUP = {};
        return LOCAL_DATASET_LOOKUP;
      }

      const payload = await res.json();
      const items = Array.isArray(payload?.items) ? payload.items : [];
      const map = {};
      items.forEach(item => {
        if (!item?.animeId || !item?.name || !item?.image) return;
        map[localKey(item.animeId, item.name)] = item.image;
      });
      LOCAL_DATASET_LOOKUP = map;
      return LOCAL_DATASET_LOOKUP;
    } catch (_) {
      LOCAL_DATASET_LOOKUP = {};
      return LOCAL_DATASET_LOOKUP;
    }
  })();

  return LOCAL_DATASET_LOADING;
}

function primeAnimeFromLocalDataset(anime) {
  if (!LOCAL_DATASET_LOOKUP) return;
  anime.chars.forEach(char => {
    const url = LOCAL_DATASET_LOOKUP[localKey(anime.id, char.name)];
    if (!url) return;
    setNameImageCache(char.name, url);
  });
}

function setNameImageCache(charName, url) {
  if (!url) return;
  const variants = getNameVariants(charName);
  variants.forEach(variant => {
    NAME_IMG_CACHE[variant] = url;
  });
}

async function postAniList(query, variables = null, retries = 6) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const res = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
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

async function fetchAniListBatch(ids, onProgress) {
  const missing = ids.filter(id => id && !IMG_CACHE[id]);
  if (!missing.length) {
    if (onProgress) onProgress(70, 'AniList ID fetch complete');
    return;
  }

  for (let i = 0; i < missing.length; i += BATCH_SIZE) {
    const slice = missing.slice(i, i + BATCH_SIZE);
    const aliases = slice
      .map((id, index) => `c${index}: Character(id:${id}) { id name { full } image { large medium } }`)
      .join('\n');
    const payload = await postAniList(`{ ${aliases} }`);

    slice.forEach((id, index) => {
      const item = payload?.data?.[`c${index}`];
      const url = item?.image?.large || item?.image?.medium || null;
      META_CACHE[id] = {
        id: item?.id || id,
        name: item?.name?.full || null,
        image: url,
      };
      if (url && !url.includes('default')) {
        IMG_CACHE[id] = url;
      }
    });

    if (onProgress) {
      const phase = Math.round(((i + slice.length) / missing.length) * 70);
      onProgress(Math.min(70, phase), 'Fetching by AniList ID...');
    }
  }
}

async function fetchAniListByName(charName) {
  const cached = getCachedNameImage(charName);
  if (cached) return cached;

  const query = `
    query CharacterByName($search: String) {
      Character(search: $search) {
        id
        name { full }
        image { large medium }
      }
    }
  `;

  const terms = getSearchTerms(charName);
  for (const term of terms) {
    const payload = await postAniList(query, { search: term }).catch(() => null);
    const item = payload?.data?.Character;
    const foundName = item?.name?.full || null;
    const url = item?.image?.large || item?.image?.medium || null;

    if (!url || url.includes('default') || !foundName) continue;
    if (!isLikelyNameMatch(charName, foundName)) continue;

    setNameImageCache(charName, url);
    return url;
  }

  return null;
}

async function fetchAniListByNameBatch(chars) {
  const unresolved = [];
  const batchSize = 20;

  for (let i = 0; i < chars.length; i += batchSize) {
    const slice = chars.slice(i, i + batchSize);
    const aliases = slice.map((char, index) => {
      const term = getSearchTerms(char.name)[0] || char.name;
      return `p${index}: Page(perPage:5) {
        characters(search:"${gqlEscape(term)}", sort:[FAVOURITES_DESC]) {
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
      unresolved.push(...slice);
      continue;
    }

    slice.forEach((char, index) => {
      const candidates = payload.data[`p${index}`]?.characters || [];
      const filtered = candidates.filter(item => {
        const foundName = item?.name?.full || '';
        const url = item?.image?.large || item?.image?.medium || null;
        return Boolean(url) && !url.includes('default') && isLikelyNameMatch(char.name, foundName);
      });

      if (!filtered.length) {
        unresolved.push(char);
        return;
      }

      const best =
        filtered.find(item => animeTitleMatch(char.animeName || '', item?.media?.nodes || [])) ||
        filtered[0];
      const foundName = best?.name?.full || null;
      const url = best?.image?.large || best?.image?.medium || null;
      if (!foundName || !url) {
        unresolved.push(char);
        return;
      }

      setNameImageCache(char.name, url);
    });
  }

  return unresolved;
}

async function loadImages(anime, onProgress) {
  await ensureLocalDatasetLoaded();
  primeAnimeFromLocalDataset(anime);

  const ids = anime.chars.map(char => char.anilist).filter(Boolean);

  if (ids.length) {
    try {
      await fetchAniListBatch(ids, onProgress);
    } catch (error) {
      console.warn('AniList ID batch fetch failed', error);
    }
  } else if (onProgress) {
    onProgress(70, 'Skipping ID lookup...');
  }

  const unresolved = anime.chars
    .filter(char => !resolveImage(char))
    .map(char => ({ ...char, animeName: anime.name }));
  const stillUnresolved = await fetchAniListByNameBatch(unresolved);

  let done = unresolved.length - stillUnresolved.length;
  if (onProgress && unresolved.length) {
    const phase = 70 + Math.round((done / unresolved.length) * 30);
    onProgress(Math.min(100, phase), 'Recovering missing images by name...');
  }

  const concurrency = Math.min(2, stillUnresolved.length);
  const queue = [...stillUnresolved];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length) {
      const char = queue.pop();
      if (!char) break;
      await fetchAniListByName(char.name);
      done += 1;
      if (onProgress) {
        const phase = 70 + Math.round((done / Math.max(unresolved.length, 1)) * 30);
        onProgress(Math.min(100, phase), 'Recovering missing images by name...');
      }
    }
  });
  if (workers.length) {
    await Promise.all(workers);
  }

  if (onProgress) onProgress(100, 'Building dataset...');
  buildDataset(anime);
}

function resolveImage(char) {
  if (char.img) return char.img;

  const cachedByName = getCachedNameImage(char.name);
  if (cachedByName) {
    return cachedByName;
  }

  if (char.anilist && IMG_CACHE[char.anilist]) {
    const meta = META_CACHE[char.anilist];
    if (!meta?.name || isLikelyNameMatch(char.name, meta.name)) {
      return IMG_CACHE[char.anilist];
    }
  }

  return null;
}

function getCachedImage(char) {
  return resolveImage(char);
}

function buildDataset(anime) {
  DATASET_CACHE[anime.id] = anime.chars.map(char => {
    const image = resolveImage(char);
    return {
      animeId: anime.id,
      animeName: anime.name,
      id: char.anilist || char.mal || null,
      provider: char.anilist ? 'anilist' : (char.mal ? 'mal' : 'custom'),
      name: char.name,
      image,
      hasImage: Boolean(image),
    };
  });

  return DATASET_CACHE[anime.id];
}

function getDataset(anime) {
  return DATASET_CACHE[anime.id] || buildDataset(anime);
}

function getMissingCharacters(anime) {
  return getDataset(anime).filter(entry => !entry.hasImage);
}

function getMismatchedCharacters(anime) {
  return anime.chars
    .filter(char => {
      if (!char.anilist || char.img) return false;
      const meta = META_CACHE[char.anilist];
      return Boolean(meta?.name) && !isLikelyNameMatch(char.name, meta.name);
    })
    .map(char => ({
      name: char.name,
      anilist: char.anilist,
      actualName: META_CACHE[char.anilist]?.name || null,
    }));
}

function exportDataset(anime) {
  const dataset = getDataset(anime);
  const blob = new Blob([JSON.stringify(dataset, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${anime.id}-characters-dataset.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
