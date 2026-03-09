# Anime Guess Who

Static browser guessing game for anime and game franchises.

This build is focused on these rosters only:

- Naruto & Shippuden
- One Piece
- Haikyuu
- My Hero Academia
- Jujutsu Kaisen
- Attack on Titan
- One Punch Man
- Demon Slayer
- Solo Leveling
- Blue Lock
- Black Clover
- Chainsaw Man
- Dandadan
- Kaiju No. 8
- Genshin
- Valorant

Each roster is curated as one canonical entry per character or important entity where practical. That includes major non-human entries such as summons, tailed beasts, devils, curses, titans, mascots, ghosts, and similar franchise-specific entities.

## Image strategy

This build uses a layered image approach instead of a single source:

1. Curated direct image URLs already stored in `js/data.js`
2. Local overrides in `images/character-image-dataset.json`
3. AniList GraphQL character lookup by ID
4. AniList GraphQL fallback by name search
5. Emoji fallback in the card UI

Notes:

- Genshin is wired with direct Guess Who style icon URLs.
- Valorant is wired with direct agent portrait URLs plus Gekko companion ability icons.
- The admin page is the fastest way to fill missing images for entities AniList does not cover well.

## Admin panel

Open `admin.html` to:

- review all current roster entities
- filter by franchise
- show only visible missing images
- hide unsupported entities from the game
- restore built-in roster images
- export an updated `character-image-dataset.json`

## Dataset files

- `js/data.js` - main playable roster data
- `images/character-image-dataset.json` - local image overrides and resolved image cache
- `images/missing-images.json` - unresolved entries for manual filling

## Local run

Run a static server from the project root:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.
