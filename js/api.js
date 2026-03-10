/**
 * api.js - Image resolution and dataset helpers.
 *
 * Resolution order:
 * 1) Curated image on the roster entry (char.img)
 * 2) Local dataset override (images/character-image-dataset.json)
 * 3) AniList by character ID (batched)
 * 4) AniList by name search (skipped for the giant aggregate A-Z board)
 * 5) Emoji fallback in the UI
 */

const IMG_CACHE = {};
const META_CACHE = {};
const NAME_IMG_CACHE = {};
const ANIME_CHAR_CACHE = {};
const DATASET_CACHE = {};
const BATCH_SIZE = 40;
let LOCAL_DATASET_LOOKUP = null;
let LOCAL_DATASET_LOADING = null;
let LOCAL_DATASET_ITEMS = null;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\bhyuuga\b/g, 'hyuga')
    .replace(/\bdanzou\b/g, 'danzo')
    .replace(/\bchouji\b/g, 'choji')
    .replace(/\bjuugo\b/g, 'jugo')
    .replace(/\boonoki\b/g, 'onoki')
    .replace(/\bmuu\b/g, 'mu')
    .replace(/\bfuu\b/g, 'fu')
    .replace(/\byuuhi\b/g, 'yuhi')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getNameVariants(name) {
  const base = String(name || '').trim();
  const variants = new Set([base]);

  base.split('/').map(part => part.trim()).filter(Boolean).forEach(part => variants.add(part));
  base.split(',').map(part => part.trim()).filter(Boolean).forEach(part => variants.add(part));

  const withoutParens = base.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  if (withoutParens) variants.add(withoutParens);

  return [...variants].map(normalizeName).filter(Boolean);
}

function getSearchTerms(name) {
  const base = String(name || '').trim();
  const terms = new Set([base]);

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
    const expectedTokens = tokenSet(variant);
    const actualTokens = tokenSet(actualNorm);
    if (
      expectedTokens.size >= 2 &&
      actualTokens.size >= 2 &&
      variant.length >= 5 &&
      (variant.includes(actualNorm) || actualNorm.includes(variant))
    ) {
      return true;
    }
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

function setNameImageCache(charName, url) {
  if (!url) return;
  const variants = getNameVariants(charName);
  variants.forEach(variant => {
    NAME_IMG_CACHE[variant] = url;
  });
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
        LOCAL_DATASET_ITEMS = [];
        return LOCAL_DATASET_LOOKUP;
      }

      const payload = await res.json();
      const items = Array.isArray(payload?.items) ? payload.items : [];
      const map = {};

      items.forEach(item => {
        if (!item?.animeId || !item?.name || !item?.image) return;
        map[localKey(item.animeId, item.name)] = item.image;
      });

      LOCAL_DATASET_ITEMS = items;
      LOCAL_DATASET_LOOKUP = map;
      return LOCAL_DATASET_LOOKUP;
    } catch (_) {
      LOCAL_DATASET_LOOKUP = {};
      LOCAL_DATASET_ITEMS = [];
      return LOCAL_DATASET_LOOKUP;
    }
  })();

  return LOCAL_DATASET_LOADING;
}

function getDatasetEntriesForAnime(animeId) {
  if (!Array.isArray(LOCAL_DATASET_ITEMS)) return [];
  return LOCAL_DATASET_ITEMS.filter(item => item?.animeId === animeId);
}

function primeAnimeFromLocalDataset(anime) {
  if (!LOCAL_DATASET_LOOKUP || !Array.isArray(anime?.chars)) return;

  anime.chars.forEach(char => {
    const sourceAnimeId = anime.id === 'allchars' && char._sourceAnimeId ? char._sourceAnimeId : anime.id;
    const url = LOCAL_DATASET_LOOKUP[localKey(sourceAnimeId, char.name)];
    if (!url) return;
    if (!char.img) char.img = url;
    setNameImageCache(char.name, url);
  });
}

function applyDatasetOverridesToAnime(anime) {
  if (!Array.isArray(anime?.chars) || !anime?.id || anime.id === 'allchars') return;
  if (!Array.isArray(LOCAL_DATASET_ITEMS)) return;

  const entries = getDatasetEntriesForAnime(anime.id);
  if (!entries.length) return;

  const byName = new Map();
  anime.chars.forEach(char => {
    byName.set(normalizeName(char.name), char);
  });

  const updatedChars = [];

  anime.chars.forEach(char => {
    const norm = normalizeName(char.name);
    const entry = entries.find(item => normalizeName(item.name) === norm);

    if (entry?.hidden) return;

    if (entry) {
      if (entry.anilist) {
        char.anilist = entry.anilist;
      }
      if (entry.image) {
        char.img = entry.image;
        setNameImageCache(char.name, entry.image);
      }
    }

    updatedChars.push(char);
  });

  entries.forEach(entry => {
    const norm = normalizeName(entry.name);
    if (byName.has(norm)) return;
    if (entry.hidden) return;
    if (
      anime.id === 'valorant' &&
      !window.GameState?.showValorantAbilities &&
      Array.isArray(ANIMES)
    ) {
      const sourceAnime = ANIMES.find(item => item.id === anime.id);
      const sourceChar = sourceAnime?.chars?.find(item => normalizeName(item.name) === norm);
      if (sourceChar?.type === 'ability') return;
    }

    updatedChars.push({
      name: entry.name,
      emoji: anime.emoji || '*',
      anilist: entry.anilist || null,
      mal: null,
      img: entry.image || undefined,
    });

    if (entry.image) {
      setNameImageCache(entry.name, entry.image);
    }
  });

  anime.chars = updatedChars;
}

function baseCharacterName(name) {
  return String(name || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isBorutoCharacterName(name) {
  const base = baseCharacterName(name).toLowerCase();
  const borutoNames = new Set([
    'boruto uzumaki',
    'sarada uchiha',
    'mitsuki',
    'kawaki',
    'himawari uzumaki',
    'shikadai nara',
    'inojin yamanaka',
    'chocho akimichi',
  ]);
  return borutoNames.has(base);
}

function normalizeAnimeRoster(anime) {
  if (!Array.isArray(anime?.chars) || anime.id === 'allchars') return;

  let chars = anime.chars.slice();

  if (anime.id === 'naruto') {
    chars = chars.filter(char => !isBorutoCharacterName(char.name));
  }

  const byBase = new Map();

  chars.forEach(char => {
    const base = normalizeName(baseCharacterName(char.name));
    if (!base) return;

    const existing = byBase.get(base);
    if (!existing) {
      byBase.set(base, char);
      return;
    }

    const existingHasId = Boolean(existing.anilist || existing.mal || existing.img);
    const currentHasId = Boolean(char.anilist || char.mal || char.img);
    const existingIsBase = normalizeName(existing.name) === base;
    const currentIsBase = normalizeName(char.name) === base;

    let winner = existing;

    if (currentHasId && !existingHasId) {
      winner = char;
    } else if (currentIsBase && !existingIsBase) {
      winner = char;
    }

    byBase.set(base, winner);
  });

  anime.chars = Array.from(byBase.values());
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

async function fetchAniListBatch(ids, onProgress) {
  const uniqueIds = [...new Set(ids.filter(Boolean))];
  const missing = uniqueIds.filter(id => !IMG_CACHE[id]);

  if (!missing.length) {
    if (onProgress) onProgress(70, 'Roster IDs already cached');
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
      onProgress(Math.min(70, phase), 'Resolving AniList IDs...');
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

      if (best?.id) {
        META_CACHE[best.id] = {
          id: best.id,
          name: foundName,
          image: url,
        };
        IMG_CACHE[best.id] = url;
      }

      const target = char.ref || char;

      if (
        best?.id &&
        (!target.anilist || !META_CACHE[target.anilist] || !isLikelyNameMatch(char.name, META_CACHE[target.anilist]?.name))
      ) {
        target.anilist = best.id;
      }

      setNameImageCache(char.name, url);
    });
  }

  return unresolved;
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

async function fetchAnimeCharactersByTitle(animeName) {
  const cacheKey = normalizeName(animeName);
  if (ANIME_CHAR_CACHE[cacheKey]) return ANIME_CHAR_CACHE[cacheKey];

  const terms = getAnimeSearchTerms(animeName);
  const merged = [];

  for (const term of terms) {
    const allNodes = [];
    let page = 1;
    let lastPage = 1;
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

      allNodes.push(...pageNodes);
      lastPage = pageInfo?.lastPage || page;
      page += 1;
    } while (page <= lastPage);

    if (media && animeTitleMatch(animeName, [media])) {
      merged.push(...allNodes);
    }
  }

  ANIME_CHAR_CACHE[cacheKey] = [...new Map(merged.map(item => [item.id, item])).values()];
  return ANIME_CHAR_CACHE[cacheKey];
}

async function fetchAniListByAnimeRoster(chars, onProgress) {
  const unresolved = [];
  const groups = new Map();

  chars.forEach(char => {
    const animeName = char.animeName || '';
    if (!animeName) {
      unresolved.push(char);
      return;
    }

    if (!groups.has(animeName)) groups.set(animeName, []);
    groups.get(animeName).push(char);
  });

  const entries = [...groups.entries()];

  for (let index = 0; index < entries.length; index += 1) {
    const [animeName, animeChars] = entries[index];
    const candidates = await fetchAnimeCharactersByTitle(animeName);

    animeChars.forEach(char => {
      const target = char.ref || char;
      const best = candidates.find(item => isLikelyNameMatch(char.name, item?.name?.full || ''));
      const foundName = best?.name?.full || null;
      const url = best?.image?.large || best?.image?.medium || null;

      if (!best?.id || !foundName || !url || url.includes('default')) {
        unresolved.push(char);
        return;
      }

      META_CACHE[best.id] = {
        id: best.id,
        name: foundName,
        image: url,
      };
      IMG_CACHE[best.id] = url;
      target.anilist = best.id;
      setNameImageCache(char.name, url);
    });

    if (onProgress) {
      const phase = 70 + Math.round(((index + 1) / Math.max(entries.length, 1)) * 15);
      onProgress(Math.min(85, phase), 'Checking anime-specific casts...');
    }
  }

  return unresolved;
}

function resolveImage(char) {
  if (char?.img) return char.img;

  const cachedByName = getCachedNameImage(char?.name);
  if (cachedByName) return cachedByName;

  if (char?.anilist && IMG_CACHE[char.anilist]) {
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

async function loadImages(anime, onProgress) {
  await ensureLocalDatasetLoaded();
  primeAnimeFromLocalDataset(anime);
  applyDatasetOverridesToAnime(anime);
  normalizeAnimeRoster(anime);

  const ids = anime.chars.map(char => char.anilist).filter(Boolean);

  if (ids.length) {
    try {
      await fetchAniListBatch(ids, onProgress);
    } catch (error) {
      console.warn('AniList ID batch fetch failed', error);
    }
  } else if (onProgress) {
    onProgress(70, 'No AniList IDs to resolve');
  }

  const unresolved = anime.chars
    .filter(char => !resolveImage(char))
    .map(char => ({
      ref: char,
      name: char.name,
      anilist: char.anilist || null,
      animeName: char._sourceAnimeName || anime.name,
    }));

  const afterAnimeRoster = await fetchAniListByAnimeRoster(unresolved, onProgress);
  if (anime.id === 'allchars') {
    if (onProgress) onProgress(100, 'Aggregate board ready');
    buildDataset(anime);
    return;
  }

  const stillUnresolved = await fetchAniListByNameBatch(afterAnimeRoster);
  let done = unresolved.length - stillUnresolved.length;

  if (onProgress && unresolved.length) {
    const phase = 70 + Math.round((done / unresolved.length) * 30);
    onProgress(Math.min(100, phase), 'Recovering unresolved names...');
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
        onProgress(Math.min(100, phase), 'Recovering unresolved names...');
      }
    }
  });

  if (workers.length) {
    await Promise.all(workers);
  }

  if (onProgress) onProgress(100, 'Dataset ready');
  buildDataset(anime);
}

function buildDataset(anime) {
  DATASET_CACHE[anime.id] = anime.chars.map(char => {
    const image = resolveImage(char);
    const sourceAnimeId = char._sourceAnimeId || anime.id;
    const sourceAnimeName = char._sourceAnimeName || anime.name;
    const meta = char.anilist ? META_CACHE[char.anilist] : null;
    return {
      animeId: sourceAnimeId,
      animeName: sourceAnimeName,
      id: char.anilist || char.mal || null,
      anilist: char.anilist || null,
      provider: char.anilist ? 'anilist' : (char.mal ? 'mal' : 'custom'),
      name: char.name,
      displayName: char.displayName || char.name,
      resolvedName: meta?.name || null,
      image,
      hasImage: Boolean(image),
      source: char.img ? 'curated' : (char.anilist ? 'anilist' : 'custom'),
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
  link.download = `${anime.id}-entities-dataset.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
