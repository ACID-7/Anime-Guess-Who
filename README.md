# Anime Guess Who

Static browser game for guessing anime characters.

Home screen now includes category filter buttons generated from anime tags.

## Image strategy

This version uses one remote source only:

- AniList GraphQL by character id

If AniList does not return an image for a character, the app does not silently switch to another API. Instead you can:

- add `img: 'images/file.jpg'` in [js/data.js](/a:/Projects/anime-guess-who/js/data.js)
- right-click a card in the game and upload a custom image for the current session
- export the dataset JSON and fill missing images before using it for model training

## Dataset export

Inside the game, click `Export Dataset`.

The exported JSON contains:

- `animeId`
- `animeName`
- `id`
- `provider`
- `name`
- `image`
- `hasImage`

This is the correct path if you want to train a model later. First build a clean dataset of `id + name + image`. Do not train on mixed or unreliable image sources.

## Local image dataset for the webpage

The app now loads `images/character-image-dataset.json` first, before live API calls.

Rebuild this file from `js/data.js` with:

```powershell
node scripts/build-image-dataset.mjs
```

Export only unresolved entries:

```powershell
node scripts/export-missing-images.mjs
```

Open `admin.html` to fill missing images and export an updated dataset JSON.

## Local run

Run a static server from the project root:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.
