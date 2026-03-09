import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const projectRoot = path.resolve(process.cwd());
const dataFile = path.join(projectRoot, 'js', 'data.js');
const reportFile = path.join(projectRoot, 'anilist-audit.json');
const batchSize = 20;

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

function tokenSet(value) {
  return new Set(normalizeName(value).split(' ').filter(Boolean));
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
  }

  return false;
}

async function loadAnimes() {
  const code = await fs.readFile(dataFile, 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${code}\nthis.__ANIMES__ = ANIMES;`, context);
  return context.__ANIMES__;
}

async function fetchBatch(ids) {
  const aliases = ids
    .map((id, index) => `c${index}: Character(id:${id}) { id name { full } image { large medium } }`)
    .join('\n');

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: `{ ${aliases} }` }),
    });

    if (response.status === 429) {
      await sleep(5000 * (attempt + 1));
      continue;
    }

    const payload = await response.json().catch(() => null);
    if (!payload?.data) {
      throw new Error(`AniList request failed with ${response.status}`);
    }

    return ids.map((id, index) => payload?.data?.[`c${index}`] || null);
  }

  throw new Error('AniList rate limit persisted after retries');
}

async function main() {
  const animes = await loadAnimes();
  const characters = animes.flatMap(anime =>
    anime.chars
      .filter(char => char.anilist)
      .map(char => ({
        animeId: anime.id,
        animeName: anime.name,
        localName: char.name,
        anilist: char.anilist,
      }))
  );

  const byId = new Map(characters.map(entry => [entry.anilist, entry]));
  const ids = [...byId.keys()];
  const report = [];

  for (let i = 0; i < ids.length; i += batchSize) {
    const slice = ids.slice(i, i + batchSize);
    const results = await fetchBatch(slice);

    results.forEach((item, index) => {
      const id = slice[index];
      const local = byId.get(id);
      const remoteName = item?.name?.full || null;
      const matched = isLikelyNameMatch(local.localName, remoteName);

      report.push({
        animeId: local.animeId,
        animeName: local.animeName,
        anilist: id,
        localName: local.localName,
        remoteName,
        image: item?.image?.large || item?.image?.medium || null,
        matched,
      });
    });

    process.stdout.write(`Checked ${Math.min(i + slice.length, ids.length)}/${ids.length}\r`);
    await sleep(750);
  }

  const mismatches = report.filter(entry => !entry.matched);
  await fs.writeFile(reportFile, JSON.stringify({ total: report.length, mismatches }, null, 2));

  console.log(`\nTotal checked: ${report.length}`);
  console.log(`Mismatches: ${mismatches.length}`);
  console.log(`Report written: ${reportFile}`);

  for (const item of mismatches.slice(0, 20)) {
    console.log(`- [${item.animeName}] ${item.localName} -> AniList "${item.remoteName}" (id ${item.anilist})`);
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
