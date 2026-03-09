/**
 * main.js - Entry point.
 */

const HomeState = {
  activeCategory: 'All',
};

function getCategories(animes) {
  const tags = new Set();
  animes.forEach(anime => (anime.tags || []).forEach(tag => tags.add(tag)));
  return ['All', ...[...tags].sort((a, b) => a.localeCompare(b))];
}

function filterAnimes(animes, category) {
  if (category === 'All') return animes;
  return animes.filter(anime => (anime.tags || []).includes(category));
}

function renderHome(animes) {
  const categories = getCategories(animes);
  const filtered = filterAnimes(animes, HomeState.activeCategory);

  renderCategoryBar(categories, HomeState.activeCategory, category => {
    HomeState.activeCategory = category;
    renderHome(animes);
  });

  renderAnimeGrid(filtered, startGame);
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome(ANIMES);
  document.getElementById('back-btn').addEventListener('click', goHome);
  document.getElementById('reset-btn').addEventListener('click', resetBoard);
  const allCharsBtn = document.getElementById('allchars-btn');
  if (allCharsBtn) {
    allCharsBtn.addEventListener('click', () => {
      if (typeof startAllCharactersMode === 'function') {
        startAllCharactersMode();
      }
    });
  }
});
