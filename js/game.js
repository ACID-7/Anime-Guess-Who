/**
 * game.js - Game state and logic.
 */

const GameState = {
  currentAnime: null,
  currentSourceAnime: null,
  flipped: new Set(),
  selectedCardKey: null,
  pickMode: false,
  showValorantAbilities: false,
};

window.GameState = GameState;

function buildAllCharactersAnime() {
  const chars = [];

  ANIMES.forEach(anime => {
    (anime.chars || []).forEach(char => {
      chars.push({
        ...char,
        displayName: `${char.name} (${anime.name})`,
        _sourceAnimeId: anime.id,
        _sourceAnimeName: anime.name,
      });
    });
  });

  chars.sort((a, b) => (a.displayName || a.name).localeCompare(b.displayName || b.name));

  return {
    id: 'allchars',
    name: 'All Characters & Entities A-Z',
    emoji: '🧾',
    color: '#22c55e',
    tags: ['All', 'A-Z'],
    chars,
  };
}

function startAllCharactersMode() {
  const aggregateAnime = buildAllCharactersAnime();
  startGame(aggregateAnime);
}

function getCardKey(char, anime) {
  return `${char?._sourceAnimeId || anime?.id || 'unknown'}::${char?.name || 'unknown'}`;
}

function buildPlayableAnime(anime) {
  const chars = (anime.chars || [])
    .filter(char => {
      if (anime.id !== 'valorant') return true;
      if (GameState.showValorantAbilities) return true;
      return char.type !== 'ability';
    })
    .map(char => ({ ...char }));

  return {
    ...anime,
    chars,
  };
}

function getSelectedCard(anime = GameState.currentAnime) {
  if (!anime || !GameState.selectedCardKey) return null;
  return anime.chars.find(char => getCardKey(char, anime) === GameState.selectedCardKey) || null;
}

function setSelectedCard(char, anime = GameState.currentAnime) {
  if (!char || !anime) return;
  GameState.selectedCardKey = getCardKey(char, anime);
  GameState.pickMode = false;
  renderBoardTools(anime);
  renderCharGrid(anime, GameState.flipped, handleCardClick);
}

function clearSelectedCard() {
  GameState.selectedCardKey = null;
  GameState.pickMode = false;
  if (!GameState.currentAnime) return;
  renderBoardTools(GameState.currentAnime);
  renderCharGrid(GameState.currentAnime, GameState.flipped, handleCardClick);
}

function beginCardPickMode() {
  GameState.pickMode = true;
  if (GameState.currentAnime) {
    renderBoardTools(GameState.currentAnime);
  }
}

async function startGame(anime, options = {}) {
  const preserveSelection = Boolean(options.preserveSelection);
  GameState.currentSourceAnime = anime;
  GameState.currentAnime = buildPlayableAnime(anime);
  GameState.flipped = new Set();

  if (!preserveSelection) {
    GameState.selectedCardKey = null;
  }

  if (GameState.selectedCardKey && !getSelectedCard(GameState.currentAnime)) {
    GameState.selectedCardKey = null;
  }

  GameState.pickMode = false;

  showScreen('game');
  renderGameTitle(GameState.currentAnime);
  renderStats(GameState.currentAnime.chars.length, 0);
  renderLoading(GameState.currentAnime);

  await loadImages(GameState.currentAnime, (pct, label) => {
    const safeLabel = label || (pct < 100 ? 'Fetching entity images...' : 'Building dataset...');
    updateLoadBar(pct, safeLabel);
  });

  renderBoardTools(GameState.currentAnime);
  renderCharGrid(GameState.currentAnime, GameState.flipped, handleCardClick);
  renderDatasetStatus(GameState.currentAnime);
}

function handleCardClick(index) {
  const char = GameState.currentAnime?.chars?.[index];
  if (!char) return;

  if (GameState.pickMode) {
    setSelectedCard(char, GameState.currentAnime);
    return;
  }

  if (GameState.flipped.has(index)) {
    GameState.flipped.delete(index);
  } else {
    GameState.flipped.add(index);
  }

  toggleCardFlip(index);
  renderStats(GameState.currentAnime.chars.length, GameState.flipped.size);
}

function resetBoard() {
  GameState.flipped = new Set();
  GameState.pickMode = false;
  renderCharGrid(GameState.currentAnime, GameState.flipped, handleCardClick);
  renderBoardTools(GameState.currentAnime);
  renderStats(GameState.currentAnime.chars.length, 0);
}

function goHome() {
  showScreen('home');
  renderDatasetStatus(null);
}

function downloadCurrentDataset() {
  if (!GameState.currentAnime) return;
  exportDataset(GameState.currentAnime);
}
