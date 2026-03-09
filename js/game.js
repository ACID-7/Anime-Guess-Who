/**
 * game.js - Game state and logic.
 */

const GameState = {
  currentAnime: null,
  flipped: new Set(),
};

window.GameState = GameState;

async function startGame(anime) {
  GameState.currentAnime = anime;
  GameState.flipped = new Set();

  showScreen('game');
  renderGameTitle(anime);
  renderStats(anime.chars.length, 0);
  renderLoading(anime);

  await loadImages(anime, (pct, label) => {
    const safeLabel = label || (pct < 100 ? 'Fetching character images from AniList...' : 'Building dataset...');
    updateLoadBar(pct, safeLabel);
  });

  renderCharGrid(anime, GameState.flipped, handleCardClick);
  renderDatasetStatus(anime);
}

function handleCardClick(index) {
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
  renderCharGrid(GameState.currentAnime, GameState.flipped, handleCardClick);
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

document.addEventListener('contextmenu', event => {
  const card = event.target.closest('.fc');
  if (!card || !GameState.currentAnime) return;

  event.preventDefault();
  const cards = [...document.querySelectorAll('.fc')];
  const index = cards.indexOf(card);

  if (index >= 0) {
    showUploadModal(GameState.currentAnime.chars[index], index, GameState.currentAnime);
  }
});
