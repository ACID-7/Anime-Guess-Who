/**
 * ui.js - DOM rendering helpers.
 */

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getDisplayName(char) {
  return char?.displayName || char?.name || 'Unknown';
}

function getBadgeAnimeName(char, anime) {
  return char?._sourceAnimeName || anime?.name || '';
}

function showScreen(id) {
  document.getElementById('home').classList.remove('active');
  const game = document.getElementById('game');
  game.style.display = 'none';

  if (id === 'home') {
    document.getElementById('home').classList.add('active');
    return;
  }

  game.style.display = 'block';
  window.scrollTo(0, 0);
}

function renderAnimeGrid(animes, onSelect) {
  const grid = document.getElementById('agrid');
  grid.innerHTML = '';

  animes.forEach((anime, index) => {
    const card = document.createElement('div');
    card.className = 'ac';
    card.style.animationDelay = `${index * 0.035}s`;
    card.innerHTML = `
      <div class="ac-ban" style="background:linear-gradient(135deg,${anime.color}1a,${anime.color}06)">
        <span style="font-size:38px;filter:drop-shadow(0 2px 8px ${anime.color}55)">${anime.emoji}</span>
      </div>
      <div class="ac-body">
        <div class="ac-name" style="color:${anime.color}">${escapeHtml(anime.name)}</div>
        <div class="ac-count">${anime.chars.length} entities</div>
        <div class="ac-tags">${(anime.tags || []).map(tag => `<span class="tag" style="color:${anime.color};border-color:${anime.color}44">${escapeHtml(tag)}</span>`).join('')}</div>
      </div>`;
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = anime.color;
      card.style.boxShadow = `0 0 20px ${anime.color}38`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    });
    card.onclick = () => onSelect(anime);
    grid.appendChild(card);
  });
}

function renderCategoryBar(categories, activeCategory, onSelect) {
  const bar = document.getElementById('catbar');
  if (!bar) return;
  bar.innerHTML = '';

  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'catbtn' + (category === activeCategory ? ' active' : '');
    button.textContent = category;
    button.onclick = () => onSelect(category);
    bar.appendChild(button);
  });
}

function renderGameTitle(anime) {
  document.getElementById('gtitle').innerHTML =
    `<span style="color:${anime.color}">${anime.emoji}</span> ${escapeHtml(anime.name.toUpperCase())}`;
}

function renderStats(total, eliminated) {
  document.getElementById('sa').textContent = total - eliminated;
  document.getElementById('se').textContent = eliminated;
}

function renderLoading(anime) {
  document.getElementById('cgrid').innerHTML = `
    <div class="loading-screen">
      <div style="font-size:36px;margin-bottom:12px">Loading</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:3px;color:var(--accent)">
        Loading ${anime.chars.length} Entities...
      </div>
      <div style="font-size:12px;margin-top:6px;color:var(--muted)">Sources: local dataset, curated direct links, and AniList</div>
      <div class="load-bar-wrap"><div class="load-bar" id="load-bar"></div></div>
      <div id="load-label" style="font-size:11px;color:var(--muted);margin-top:8px">Preparing roster...</div>
    </div>`;
}

function updateLoadBar(pct, label) {
  const bar = document.getElementById('load-bar');
  const text = document.getElementById('load-label');

  if (bar) bar.style.width = `${pct}%`;
  if (text && label) text.textContent = label;
}

function renderBoardTools(anime) {
  renderSecretCardPanel(anime);
  renderBoardOptions(anime);
}

function renderSecretCardPanel(anime) {
  const panel = document.getElementById('secret-card-panel');
  if (!panel) return;

  const selected = typeof getSelectedCard === 'function' ? getSelectedCard(anime) : null;
  const preview = selected
    ? `
      <div class="secret-card-preview">
        <div class="fc secret-preview-card secret-selected">
          ${buildCardHTML(selected, anime, getCachedImage(selected))}
        </div>
      </div>`
    : `
      <div class="secret-placeholder">
        <div class="secret-kicker">${window.GameState?.pickMode ? 'Pick Mode Active' : 'Secret Card'}</div>
        <div class="secret-name">${window.GameState?.pickMode ? 'Click any card to select it' : 'No card selected yet'}</div>
        <div class="secret-meta">Drag a card here or click Choose Card.</div>
      </div>`;

  panel.className = `secret-card-panel${selected ? ' has-card' : ''}${window.GameState?.pickMode ? ' is-armed' : ''}`;
  panel.innerHTML = `
    <div class="secret-card-dropzone${selected ? ' has-card' : ''}">
      ${preview}
    </div>
    <div class="secret-card-actions">
      <button type="button" class="rbtn secret-btn choose">${selected ? 'Change Card' : 'Choose Card'}</button>
      <button type="button" class="rbtn secret-btn clear"${selected ? '' : ' disabled'}>Clear</button>
    </div>`;

  const dropzone = panel.querySelector('.secret-card-dropzone');
  if (dropzone) {
    dropzone.addEventListener('dragover', event => {
      event.preventDefault();
      panel.classList.add('is-drop-target');
    });
    dropzone.addEventListener('dragleave', () => {
      panel.classList.remove('is-drop-target');
    });
    dropzone.addEventListener('drop', event => {
      event.preventDefault();
      panel.classList.remove('is-drop-target');
      const rawIndex = event.dataTransfer?.getData('text/plain');
      const index = Number(rawIndex);
      if (!Number.isInteger(index)) return;
      const char = anime?.chars?.[index];
      if (char && typeof setSelectedCard === 'function') {
        setSelectedCard(char, anime);
      }
    });
  }

  const chooseBtn = panel.querySelector('.choose');
  if (chooseBtn) {
    chooseBtn.addEventListener('click', () => {
      if (typeof beginCardPickMode === 'function') {
        beginCardPickMode();
      }
    });
  }

  const clearBtn = panel.querySelector('.clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (typeof clearSelectedCard === 'function') {
        clearSelectedCard();
      }
    });
  }
}

function renderBoardOptions(anime) {
  const wrap = document.getElementById('board-options');
  if (!wrap) return;

  if (anime?.id !== 'valorant') {
    wrap.innerHTML = '';
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = 'flex';
  const checked = window.GameState?.showValorantAbilities ? 'checked' : '';
  wrap.innerHTML = `
    <label class="option-toggle">
      <input id="valorant-abilities-toggle" type="checkbox" ${checked} />
      <span class="option-toggle-ui" aria-hidden="true"></span>
      <span class="option-copy">
        <strong>Show Abilities</strong>
        <span>Valorant only</span>
      </span>
    </label>`;

  const input = document.getElementById('valorant-abilities-toggle');
  if (input) {
    input.addEventListener('change', async event => {
      if (!window.GameState?.currentSourceAnime || typeof startGame !== 'function') return;
      window.GameState.showValorantAbilities = Boolean(event.target.checked);
      await startGame(window.GameState.currentSourceAnime, { preserveSelection: true });
    });
  }
}

function renderCharGrid(anime, flipped, onCardClick) {
  const grid = document.getElementById('cgrid');
  grid.innerHTML = '';

  anime.chars.forEach((char, index) => {
    const imgUrl = getCachedImage(char);
    const card = document.createElement('div');
    const selectedKey = window.GameState?.selectedCardKey || null;
    const cardKey = typeof getCardKey === 'function' ? getCardKey(char, anime) : null;
    card.className = 'fc board-card' + (flipped.has(index) ? ' flipped' : '') + (selectedKey && selectedKey === cardKey ? ' secret-selected' : '');
    card.style.cssText = `animation-delay:${Math.min(index * 0.016, 1.2)}s;--hc:${anime.color};--hg:${anime.color}38`;
    card.title = window.GameState?.pickMode
      ? 'Click to choose this as your secret card.'
      : 'Click to flip. Drag to the secret-card dock or right-click to set a custom image.';
    card.draggable = true;
    card.innerHTML = buildCardHTML(char, anime, imgUrl);
    card.addEventListener('click', () => onCardClick(index));
    card.addEventListener('dragstart', event => {
      event.dataTransfer?.setData('text/plain', String(index));
      event.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('contextmenu', event => {
      event.preventDefault();
      showUploadModal(char, index, anime);
    });
    grid.appendChild(card);
  });
}

function buildCardHTML(char, anime, imgUrl) {
  const displayName = escapeHtml(getDisplayName(char));
  const baseName = escapeHtml(char?.name || 'Unknown');
  const badgeName = escapeHtml(getBadgeAnimeName(char, anime));
  const imgTag = imgUrl
    ? `<img class="cimg" src="${imgUrl}" alt="${baseName}" loading="lazy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const fallbackStyle = imgUrl ? '' : 'display:flex;';

  return `
    <div class="fci">
      <div class="ff">
        <div class="imgw">
          ${imgTag}
          <div class="cfb" style="${fallbackStyle}background:linear-gradient(150deg,${anime.color}1a,#0a0a16)">
            <span style="font-size:38px">${escapeHtml(char.emoji || '*')}</span>
            <span class="cfb-nm">${displayName}</span>
          </div>
          <div class="ov"></div>
          <div class="ci">
            <div class="cn">${displayName}</div>
            <span class="cb" style="background:${anime.color}1e;color:${anime.color};border:1px solid ${anime.color}44">${badgeName}</span>
          </div>
        </div>
      </div>
      <div class="fb">
        <div class="bpat"></div>
        <div class="bx">X</div>
        <div class="bl">Eliminated</div>
        <div class="bn">${displayName}</div>
      </div>
    </div>`;
}

function toggleCardFlip(index) {
  const cards = document.querySelectorAll('#cgrid .board-card');
  if (cards[index]) cards[index].classList.toggle('flipped');
}

function renderDatasetStatus(anime) {
  const status = document.getElementById('dataset-status');
  if (!status) return;

  if (!anime) {
    status.textContent = '';
    return;
  }

  const dataset = getDataset(anime);
  const withImages = dataset.filter(entry => entry.hasImage).length;
  const missing = dataset.length - withImages;
  const mismatches = getMismatchedCharacters(anime).length;

  if (!missing && !mismatches) {
    status.textContent = `${withImages}/${dataset.length} entities resolved. Export is ready if you want to snapshot the roster dataset.`;
    return;
  }

  status.textContent = `${withImages}/${dataset.length} entities resolved from curated links, the local dataset, or AniList. ${missing} still need manual images. ${mismatches} AniList IDs were mismatched and are automatically bypassed with name search when possible.`;
}

function showUploadModal(char, index, anime) {
  const oldModal = document.getElementById('upload-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'upload-modal';
  modal.innerHTML = `
    <div class="modal-bg" onclick="closeUploadModal()"></div>
    <div class="modal-box">
      <div class="modal-title">Set Image for ${escapeHtml(getDisplayName(char))}</div>
      <p class="modal-sub">Paste a direct image URL or choose a local file for this session.</p>
      <input id="url-input" class="modal-input" type="url" placeholder="https://example.com/image.jpg" />
      <div class="modal-or">or</div>
      <input id="file-input" type="file" accept="image/*" class="modal-file" />
      <div class="modal-btns">
        <button class="modal-btn cancel" onclick="closeUploadModal()">Cancel</button>
        <button class="modal-btn confirm" onclick="applyCustomImage(${index})">Apply</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.dataset.charIndex = index;
  modal.dataset.animeId = anime.id;
}

function closeUploadModal() {
  const modal = document.getElementById('upload-modal');
  if (modal) modal.remove();
}

function syncCustomImageToSourceRosters(char, imgUrl) {
  if (!char?._sourceAnimeId || !Array.isArray(ANIMES)) return;
  const sourceAnime = ANIMES.find(item => item.id === char._sourceAnimeId);
  if (!sourceAnime || !Array.isArray(sourceAnime.chars)) return;

  const target = sourceAnime.chars.find(item => item.name === char.name);
  if (!target) return;

  target.img = imgUrl;
  if (target.anilist) IMG_CACHE[target.anilist] = imgUrl;
  if (typeof setNameImageCache === 'function') {
    setNameImageCache(target.name, imgUrl);
  }
  if (typeof buildDataset === 'function') {
    buildDataset(sourceAnime);
  }
}

async function applyCustomImage(cardIndex) {
  const urlInput = document.getElementById('url-input');
  const fileInput = document.getElementById('file-input');
  let imgUrl = null;

  if (fileInput.files && fileInput.files[0]) {
    imgUrl = await new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => resolve(event.target.result);
      reader.readAsDataURL(fileInput.files[0]);
    });
  } else if (urlInput.value.trim()) {
    imgUrl = urlInput.value.trim();
  }

  if (!imgUrl || !window.GameState?.currentAnime) return;

  const char = GameState.currentAnime.chars[cardIndex];
  if (!char) return;

  char.img = imgUrl;
  if (char.anilist) IMG_CACHE[char.anilist] = imgUrl;

  if (typeof setNameImageCache === 'function') {
    setNameImageCache(char.name, imgUrl);
  }

  syncCustomImageToSourceRosters(char, imgUrl);

  buildDataset(GameState.currentAnime);

  const cards = document.querySelectorAll('.fc');
  const boardCards = document.querySelectorAll('#cgrid .board-card');
  const card = boardCards[cardIndex];
  if (card) {
    const isFlipped = card.classList.contains('flipped');
    card.innerHTML = buildCardHTML(char, GameState.currentAnime, imgUrl);
    if (isFlipped) card.classList.add('flipped');
  }

  renderDatasetStatus(GameState.currentAnime);
  closeUploadModal();
}
