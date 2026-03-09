import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.cwd());
const datasetFile = path.join(root, 'images', 'character-image-dataset.json');
const missingFile = path.join(root, 'images', 'missing-images.json');

async function main() {
  const raw = await fs.readFile(datasetFile, 'utf8');
  const dataset = JSON.parse(raw);
  const items = Array.isArray(dataset.items) ? dataset.items : [];

  const missing = items
    .filter(item => !item.hasImage || !item.image)
    .map(item => ({
      animeId: item.animeId,
      animeName: item.animeName,
      name: item.name,
      anilist: item.anilist || null,
      resolvedName: item.resolvedName || null,
      image: null,
      notes: '',
    }))
    .sort((a, b) => (a.animeId + a.name).localeCompare(b.animeId + b.name));

  const output = {
    version: 1,
    generatedAt: new Date().toISOString(),
    sourceDataset: 'images/character-image-dataset.json',
    totalMissing: missing.length,
    items: missing,
  };

  await fs.writeFile(missingFile, JSON.stringify(output, null, 2));
  console.log(`Missing file written: ${missingFile}`);
  console.log(`Total missing: ${missing.length}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
