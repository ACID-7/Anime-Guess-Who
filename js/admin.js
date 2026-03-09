const state = {
  dataset: null,
  missing: [],
  query: '',
  animeFilter: 'all',
};

async function loadJson(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function keyOf(item) {
  return `${item.animeId}::${item.name}`;
}

function filteredMissing() {
  const q = state.query.trim().toLowerCase();
  const filterId = state.animeFilter;

  let rows = state.missing;

  if (filterId && filterId !== 'all') {
    rows = rows.filter(item => item.animeId === filterId);
  }

  if (!q) return rows;

  return rows.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.animeName.toLowerCase().includes(q) ||
    String(item.anilist || '').includes(q)
  );
}

function getAnimeOptions() {
  const map = new Map();
  state.missing.forEach(item => {
    if (!item?.animeId) return;
    if (!map.has(item.animeId)) {
      map.set(item.animeId, item.animeName || item.animeId);
    }
  });
  return [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
}

function renderAnimeFilter() {
  const select = document.getElementById('anime-filter');
  if (!select) return;

  const options = getAnimeOptions();
  select.innerHTML =
    '<option value="all">All anime</option>' +
    options.map(([id, name]) => `<option value="${id}">${name}</option>`).join('');

  select.value = state.animeFilter || 'all';
}

function updateStats() {
  const total = state.dataset.items.length;
  const withImage = state.dataset.items.filter(item => item.image).length;
  const missing = total - withImage;
  document.getElementById('stats').textContent = `${withImage}/${total} with image, ${missing} missing`;
}

function findDatasetItem(missingItem) {
  const key = keyOf(missingItem);
  return state.dataset.items.find(item => keyOf(item) === key);
}

function setItemImage(missingItem, imageUrl) {
  const target = findDatasetItem(missingItem);
  if (!target) return;
  target.image = imageUrl;
  target.hasImage = Boolean(imageUrl);
  target.source = imageUrl ? 'manual' : (target.source || 'none');
}

function rowHtml(item) {
  const datasetItem = findDatasetItem(item);
  const currentImage = datasetItem?.image || '';
  const previewStyle = currentImage ? `background-image:url('${currentImage.replace(/'/g, "\\'")}');` : '';
  const emptyClass = currentImage ? '' : 'empty';
  const emptyText = currentImage ? '' : 'No image';
  const hidden = Boolean(datasetItem?.hidden);

  return `
    <article class="row" data-key="${keyOf(item)}">
      <div class="row-head">
        <div class="row-meta">
          <div class="meta-line">
            <label>Character</label>
            <input class="name-edit" type="text" value="${item.name || ''}" />
          </div>
          <div class="meta-line">
            <label>Anime ID</label>
            <input class="anime-id-edit" type="text" value="${item.animeId || ''}" />
          </div>
          <div class="meta-line">
            <label>Anime Name</label>
            <input class="anime-name-edit" type="text" value="${item.animeName || ''}" />
          </div>
          <div class="meta-line">
            <label>AniList ID</label>
            <input class="anilist-edit" type="number" value="${item.anilist || ''}" />
          </div>
          <label class="flag">
            <input class="hidden-toggle" type="checkbox" ${hidden ? 'checked' : ''} />
            Hide character
          </label>
        </div>
      </div>
      <div class="preview ${emptyClass}" style="${previewStyle}">${emptyText}</div>
      <input class="url-input" type="url" placeholder="https://example.com/image.jpg" />
      <input class="file-input" type="file" accept="image/*" />
      <button class="btn save">Apply Image</button>
    </article>
  `;
}

function renderList() {
  const list = document.getElementById('list');
  const rows = filteredMissing();
  list.innerHTML = rows.map(rowHtml).join('');

  rows.forEach(item => {
    const row = list.querySelector(`[data-key="${CSS.escape(keyOf(item))}"]`);
    if (!row) return;
    const nameInput = row.querySelector('.name-edit');
    const animeIdInput = row.querySelector('.anime-id-edit');
    const animeNameInput = row.querySelector('.anime-name-edit');
    const anilistInput = row.querySelector('.anilist-edit');
    const hiddenToggle = row.querySelector('.hidden-toggle');
    const urlInput = row.querySelector('.url-input');
    const fileInput = row.querySelector('.file-input');
    const saveBtn = row.querySelector('.save');

    const target = findDatasetItem(item) || item;

    if (nameInput) {
      nameInput.addEventListener('input', event => {
        const value = String(event.target.value || '').trim();
        target.name = value;
        item.name = value;
      });
    }

    if (animeIdInput) {
      animeIdInput.addEventListener('input', event => {
        const value = String(event.target.value || '').trim();
        target.animeId = value;
        item.animeId = value;
      });
    }

    if (animeNameInput) {
      animeNameInput.addEventListener('input', event => {
        const value = String(event.target.value || '').trim();
        target.animeName = value;
        item.animeName = value;
      });
    }

    if (anilistInput) {
      anilistInput.addEventListener('input', event => {
        const raw = event.target.value;
        const num = raw === '' ? null : Number(raw);
        target.anilist = Number.isFinite(num) ? num : null;
        item.anilist = target.anilist;
      });
    }

    if (hiddenToggle) {
      hiddenToggle.addEventListener('change', event => {
        const checked = Boolean(event.target.checked);
        target.hidden = checked;
        item.hidden = checked;
      });
    }

    saveBtn.addEventListener('click', async () => {
      let imageUrl = urlInput.value.trim();
      if (!imageUrl && fileInput.files && fileInput.files[0]) {
        imageUrl = await new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = event => resolve(event.target.result);
          reader.readAsDataURL(fileInput.files[0]);
        });
      }
      if (!imageUrl) return;

      setItemImage(item, imageUrl);
      updateStats();
      renderList();
    });
  });
}

function exportDataset() {
  state.dataset.generatedAt = new Date().toISOString();
  const blob = new Blob([JSON.stringify(state.dataset, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'character-image-dataset.updated.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function addCharacter() {
  if (!state.dataset) return;

  const animeOptions = getAnimeOptions();
  const firstAnime = animeOptions[0] || ['custom', 'Custom Anime'];

  const newItem = {
    animeId: firstAnime[0],
    animeName: firstAnime[1],
    name: 'New Character',
    anilist: null,
    image: '',
    hasImage: false,
    source: 'manual',
    hidden: false,
  };

  state.dataset.items.push(newItem);
  state.missing = state.dataset.items;
  updateStats();
  renderAnimeFilter();
  renderList();
}

async function init() {
  state.dataset = await loadJson('images/character-image-dataset.json');
  state.missing = state.dataset.items || [];
  updateStats();
  renderAnimeFilter();
  renderList();

  document.getElementById('search').addEventListener('input', event => {
    state.query = event.target.value || '';
    renderList();
  });

  document.getElementById('export-btn').addEventListener('click', exportDataset);

  const addBtn = document.getElementById('add-character-btn');
  if (addBtn) {
    addBtn.addEventListener('click', addCharacter);
  }

  const animeFilter = document.getElementById('anime-filter');
  if (animeFilter) {
    animeFilter.addEventListener('change', event => {
      state.animeFilter = event.target.value || 'all';
      renderList();
    });
  }
}

let adminInitialized = false;

function ensureAdminInit() {
  if (adminInitialized) return;
  adminInitialized = true;
  init().catch(error => {
    const stats = document.getElementById('stats');
    if (stats) stats.textContent = error.message;
  });
}

const AUTH_KEY = 'animeGuessWhoAdminAuthed';
const ADMIN_USERNAME = 'Bongo Head';
const ADMIN_PASSWORD = 'Cherry';

function handleLoginSubmit(event) {
  if (event) event.preventDefault();

  const usernameInput = document.getElementById('admin-username');
  const passwordInput = document.getElementById('admin-password');
  const errorEl = document.getElementById('login-error');

  if (!usernameInput || !passwordInput) return;

  const username = String(usernameInput.value || '').trim();
  const password = String(passwordInput.value || '');

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    if (errorEl) errorEl.textContent = '';
    try {
      sessionStorage.setItem(AUTH_KEY, '1');
    } catch (_) {
      // ignore storage errors
    }

    const loginScreen = document.getElementById('login-screen');
    const app = document.getElementById('admin-app');
    if (loginScreen) loginScreen.style.display = 'none';
    if (app) app.style.display = 'block';

    ensureAdminInit();
  } else if (errorEl) {
    errorEl.textContent = 'Incorrect username or password.';
  }
}

function setupAuth() {
  const loginScreen = document.getElementById('login-screen');
  const app = document.getElementById('admin-app');

  if (!loginScreen || !app) {
    ensureAdminInit();
    return;
  }

  let authed = false;
  try {
    authed = sessionStorage.getItem(AUTH_KEY) === '1';
  } catch (_) {
    authed = false;
  }

  if (authed) {
    loginScreen.style.display = 'none';
    app.style.display = 'block';
    ensureAdminInit();
    return;
  }

  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', handleLoginSubmit);
  }
}

setupAuth();
