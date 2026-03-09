const state = {
  dataset: null,
  items: [],
  query: '',
  animeFilter: 'all',
  showMissingOnly: false,
};
let rowSequence = 0;

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function loadJson(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function keyOf(item) {
  if (!item._rowId) {
    rowSequence += 1;
    item._rowId = `row-${rowSequence}`;
  }
  return item._rowId;
}

function buildRosterItems() {
  if (!Array.isArray(ANIMES)) return [];

  const items = [];
  ANIMES.forEach(anime => {
    (anime.chars || []).forEach(char => {
      items.push({
        animeId: anime.id,
        animeName: anime.name,
        name: char.name,
        anilist: char.anilist || null,
        image: char.img || '',
        hasImage: Boolean(char.img),
        source: char.img ? 'roster' : 'none',
        hidden: false,
        resolvedName: null,
        rosterImage: char.img || '',
        _rowId: null,
      });
    });
  });

  return items;
}

function mergeRosterWithDataset(rosterItems, dataset) {
  const existingItems = Array.isArray(dataset?.items) ? dataset.items : [];
  const byKey = new Map();

  existingItems.forEach(item => {
    if (!item?.animeId || !item?.name) return;
    byKey.set(keyOf(item), { ...item });
  });

  const merged = rosterItems.map(rosterItem => {
    const existing = byKey.get(keyOf(rosterItem));
    const mergedItem = {
      ...rosterItem,
      ...(existing || {}),
      animeId: existing?.animeId || rosterItem.animeId,
      animeName: existing?.animeName || rosterItem.animeName,
      name: existing?.name || rosterItem.name,
      anilist: existing?.anilist ?? rosterItem.anilist ?? null,
      image: existing?.image || rosterItem.image || '',
      hasImage: Boolean(existing?.image || rosterItem.image),
      source: existing?.source || (existing?.image ? 'manual' : rosterItem.source || 'none'),
      hidden: Boolean(existing?.hidden),
      resolvedName: existing?.resolvedName || null,
      rosterImage: rosterItem.image || '',
      _rowId: existing?._rowId || rosterItem._rowId || null,
    };
    byKey.delete(keyOf(rosterItem));
    return mergedItem;
  });

  byKey.forEach(item => {
    merged.push({
      animeId: item.animeId,
      animeName: item.animeName,
      name: item.name,
      anilist: item.anilist || null,
      image: item.image || '',
      hasImage: Boolean(item.image),
      source: item.source || (item.image ? 'manual' : 'none'),
      hidden: Boolean(item.hidden),
      resolvedName: item.resolvedName || null,
      rosterImage: '',
      _rowId: item._rowId || null,
    });
  });

  merged.sort((a, b) => {
    const missingDelta = Number(Boolean(a.image)) - Number(Boolean(b.image));
    if (missingDelta !== 0) return missingDelta;
    const animeCompare = String(a.animeName || '').localeCompare(String(b.animeName || ''));
    if (animeCompare !== 0) return animeCompare;
    return String(a.name || '').localeCompare(String(b.name || ''));
  });

  return {
    version: dataset?.version || 1,
    generatedAt: dataset?.generatedAt || new Date().toISOString(),
    sourceDataset: 'images/character-image-dataset.json',
    items: merged,
  };
}

function currentItems() {
  return Array.isArray(state.dataset?.items) ? state.dataset.items : [];
}

function visibleMissing(item) {
  return !item.hidden && !item.image;
}

function getAnimeOptions() {
  const map = new Map();
  currentItems().forEach(item => {
    if (!item?.animeId) return;
    if (!map.has(item.animeId)) {
      map.set(item.animeId, item.animeName || item.animeId);
    }
  });
  return [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
}

function getFilteredItems() {
  const q = state.query.trim().toLowerCase();
  const filterId = state.animeFilter;

  let rows = currentItems();

  if (filterId && filterId !== 'all') {
    rows = rows.filter(item => item.animeId === filterId);
  }

  if (state.showMissingOnly) {
    rows = rows.filter(visibleMissing);
  }

  if (!q) return rows;

  return rows.filter(item =>
    String(item.name || '').toLowerCase().includes(q) ||
    String(item.animeName || '').toLowerCase().includes(q) ||
    String(item.animeId || '').toLowerCase().includes(q) ||
    String(item.anilist || '').includes(q)
  );
}

function renderAnimeFilter() {
  const select = document.getElementById('anime-filter');
  if (!select) return;

  const options = getAnimeOptions();
  select.innerHTML =
    '<option value="all">All rosters</option>' +
    options.map(([id, name]) => `<option value="${escapeHtml(id)}">${escapeHtml(name)}</option>`).join('');

  select.value = state.animeFilter || 'all';
}

function updateStats() {
  const items = currentItems();
  const total = items.length;
  const withImage = items.filter(item => item.image).length;
  const missing = items.filter(visibleMissing).length;
  const hidden = items.filter(item => item.hidden).length;

  const stats = document.getElementById('stats');
  if (stats) {
    stats.textContent = `${withImage}/${total} with image · ${missing} visible missing · ${hidden} hidden`;
  }
}

function getSummaryRows() {
  const groups = new Map();
  currentItems().forEach(item => {
    if (!groups.has(item.animeId)) {
      groups.set(item.animeId, {
        animeId: item.animeId,
        animeName: item.animeName || item.animeId,
        total: 0,
        withImage: 0,
        missing: 0,
        hidden: 0,
      });
    }

    const row = groups.get(item.animeId);
    row.total += 1;
    if (item.image) row.withImage += 1;
    if (visibleMissing(item)) row.missing += 1;
    if (item.hidden) row.hidden += 1;
  });

  return [...groups.values()].sort((a, b) => a.animeName.localeCompare(b.animeName));
}

function renderSummaryGrid() {
  const wrap = document.getElementById('summary-grid');
  if (!wrap) return;

  const rows = getSummaryRows();
  wrap.innerHTML = rows.map(row => {
    const pct = row.total ? Math.round((row.withImage / row.total) * 100) : 0;
    const active = state.animeFilter === row.animeId ? ' active' : '';
    return `
      <button class="summary-card${active}" data-anime-id="${escapeHtml(row.animeId)}" type="button">
        <div class="summary-name">${escapeHtml(row.animeName)}</div>
        <div class="summary-meta">${row.withImage}/${row.total} imaged · ${row.missing} missing · ${row.hidden} hidden</div>
        <div class="summary-bar"><span style="width:${pct}%"></span></div>
      </button>`;
  }).join('');

  wrap.querySelectorAll('.summary-card').forEach(card => {
    card.addEventListener('click', () => {
      const animeId = card.dataset.animeId || 'all';
      state.animeFilter = state.animeFilter === animeId ? 'all' : animeId;
      renderAnimeFilter();
      renderSummaryGrid();
      renderList();
    });
  });
}

function setItemImage(item, imageUrl, source = 'manual') {
  item.image = imageUrl || '';
  item.hasImage = Boolean(item.image);
  item.source = item.image ? source : 'none';
}

function refreshAdminUi() {
  updateStats();
  renderAnimeFilter();
  renderSummaryGrid();
  renderList();
}

function rowHtml(item) {
  const currentImage = item.image || '';
  const previewStyle = currentImage ? `background-image:url('${currentImage.replace(/'/g, "\\'")}');` : '';
  const emptyClass = currentImage ? '' : 'empty';
  const emptyText = currentImage ? '' : 'No image';
  const hidden = Boolean(item.hidden);
  const rosterBadge = item.rosterImage ? '<span class="chip">Roster image</span>' : '';
  const sourceBadge = `<span class="chip">${escapeHtml(item.source || 'none')}</span>`;
  const hiddenBadge = hidden ? '<span class="chip warn">Hidden</span>' : '';

  return `
    <article class="row" data-key="${escapeHtml(keyOf(item))}">
      <div class="row-head">
        <div>
          <div class="name">${escapeHtml(item.name || 'Unnamed')}</div>
          <div class="anime">${escapeHtml(item.animeName || item.animeId || 'Unknown roster')}</div>
        </div>
        <div class="chips">${sourceBadge}${rosterBadge}${hiddenBadge}</div>
      </div>
      <div class="row-meta-grid">
        <div class="meta-line">
          <label>Entity</label>
          <input class="name-edit" type="text" value="${escapeHtml(item.name || '')}" />
        </div>
        <div class="meta-line">
          <label>Roster ID</label>
          <input class="anime-id-edit" type="text" value="${escapeHtml(item.animeId || '')}" />
        </div>
        <div class="meta-line">
          <label>Roster Name</label>
          <input class="anime-name-edit" type="text" value="${escapeHtml(item.animeName || '')}" />
        </div>
        <div class="meta-line">
          <label>AniList ID</label>
          <input class="anilist-edit" type="number" value="${item.anilist || ''}" />
        </div>
      </div>
      <label class="flag">
        <input class="hidden-toggle" type="checkbox" ${hidden ? 'checked' : ''} />
        Hide this entity in the game
      </label>
      <div class="preview ${emptyClass}" style="${previewStyle}">${emptyText}</div>
      <input class="url-input" type="url" placeholder="https://example.com/image.jpg" value="" />
      <input class="file-input" type="file" accept="image/*" />
      <div class="row-actions">
        <button class="btn save">Apply Image</button>
        <button class="btn ghost clear">Clear</button>
        <button class="btn ghost restore" ${item.rosterImage ? '' : 'disabled'}>Restore Roster</button>
      </div>
    </article>
  `;
}

function renderList() {
  const list = document.getElementById('list');
  if (!list) return;

  const rows = getFilteredItems();
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
    const clearBtn = row.querySelector('.clear');
    const restoreBtn = row.querySelector('.restore');

    if (nameInput) {
      nameInput.addEventListener('input', event => {
        item.name = String(event.target.value || '').trim();
        renderList();
      });
    }

    if (animeIdInput) {
      animeIdInput.addEventListener('input', event => {
        item.animeId = String(event.target.value || '').trim();
        updateStats();
        renderAnimeFilter();
        renderSummaryGrid();
      });
    }

    if (animeNameInput) {
      animeNameInput.addEventListener('input', event => {
        item.animeName = String(event.target.value || '').trim();
        renderAnimeFilter();
        renderSummaryGrid();
      });
    }

    if (anilistInput) {
      anilistInput.addEventListener('input', event => {
        const raw = event.target.value;
        const num = raw === '' ? null : Number(raw);
        item.anilist = Number.isFinite(num) ? num : null;
      });
    }

    if (hiddenToggle) {
      hiddenToggle.addEventListener('change', event => {
        item.hidden = Boolean(event.target.checked);
        refreshAdminUi();
      });
    }

    if (saveBtn) {
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

        setItemImage(item, imageUrl, 'manual');
        refreshAdminUi();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        setItemImage(item, '', 'none');
        refreshAdminUi();
      });
    }

    if (restoreBtn) {
      restoreBtn.addEventListener('click', () => {
        if (!item.rosterImage) return;
        setItemImage(item, item.rosterImage, 'roster');
        refreshAdminUi();
      });
    }
  });
}

function sanitizeExportItem(item) {
  return {
    animeId: item.animeId,
    animeName: item.animeName,
    name: item.name,
    anilist: item.anilist || null,
    resolvedName: item.resolvedName || null,
    image: item.image || null,
    hasImage: Boolean(item.image),
    source: item.source || (item.image ? 'manual' : 'none'),
    hidden: Boolean(item.hidden),
  };
}

function exportDataset() {
  if (!state.dataset) return;

  state.dataset.generatedAt = new Date().toISOString();
  const output = {
    ...state.dataset,
    items: currentItems().map(sanitizeExportItem),
  };

  const blob = new Blob([JSON.stringify(output, null, 2)], { type: 'application/json' });
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
  const firstAnime = animeOptions[0] || ['custom', 'Custom Roster'];
  const newItem = {
    animeId: firstAnime[0],
    animeName: firstAnime[1],
    name: 'New Entity',
    anilist: null,
    image: '',
    hasImage: false,
    source: 'none',
    hidden: false,
    resolvedName: null,
    rosterImage: '',
  };

  state.dataset.items.unshift(newItem);
  refreshAdminUi();
}

async function rebuildFromRosters() {
  const datasetJson = await loadJson('images/character-image-dataset.json');
  state.dataset = mergeRosterWithDataset(buildRosterItems(), datasetJson);
  refreshAdminUi();
}

async function init() {
  const datasetJson = await loadJson('images/character-image-dataset.json');
  state.dataset = mergeRosterWithDataset(buildRosterItems(), datasetJson);
  refreshAdminUi();

  document.getElementById('search').addEventListener('input', event => {
    state.query = event.target.value || '';
    renderList();
  });

  document.getElementById('export-btn').addEventListener('click', exportDataset);
  document.getElementById('rebuild-btn').addEventListener('click', () => {
    rebuildFromRosters().catch(error => {
      const stats = document.getElementById('stats');
      if (stats) stats.textContent = error.message;
    });
  });

  const addBtn = document.getElementById('add-character-btn');
  if (addBtn) {
    addBtn.addEventListener('click', addCharacter);
  }

  const animeFilter = document.getElementById('anime-filter');
  if (animeFilter) {
    animeFilter.addEventListener('change', event => {
      state.animeFilter = event.target.value || 'all';
      renderSummaryGrid();
      renderList();
    });
  }

  const missingToggle = document.getElementById('missing-only-toggle');
  if (missingToggle) {
    missingToggle.addEventListener('change', event => {
      state.showMissingOnly = Boolean(event.target.checked);
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
