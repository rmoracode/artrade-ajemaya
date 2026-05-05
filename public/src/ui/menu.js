import { brands, activeBrand, setActiveBrand, getActiveBrand } from '../config/brands.js';
import { assetMetadata, buildAssetHTML } from '../assets/catalog.js';
import { selectElement } from './editor.js';
import { getWorld, getCursorDot } from '../ar/scene.js';

export function toggleMenu() {
  const menu = document.getElementById('side-menu');
  if (!menu) return;

  const willOpen = !menu.classList.contains('open');
  menu.classList.toggle('open', willOpen);
  menu.style.transform = willOpen ? 'translateX(0)' : 'translateX(-100%)';
}

export function addAsset(type) {
  const world = getWorld();
  if (!world) return;

  const el = document.createElement('a-entity');
  el.setAttribute('class', 'clickable');
  el.setAttribute('position', '0 -1 -3');
  el.setAttribute('scale', '1 1 1');
  el.dataset.assetType = type;

  const modelHtml = buildAssetHTML(type);
  el.innerHTML = modelHtml;

  el.addEventListener('mousedown', (e) => {
    selectElement(el, type);
    const cursor = getCursorDot();
    if (cursor) cursor.setAttribute('material', 'color: #00ff00');
  });

  el.addEventListener('touchstart', (e) => {
    selectElement(el, type);
    const cursor = getCursorDot();
    if (cursor) cursor.setAttribute('material', 'color: #00ff00');
  });

  world.appendChild(el);
  selectElement(el, type);
  toggleMenu();
}

export function renderMenuButtons() {
  const buttonsContainer = document.getElementById('menu-buttons-container');
  if (!buttonsContainer) return;

  const brand = getActiveBrand();
  buttonsContainer.innerHTML = '';

  brand.assets.forEach(assetType => {
    const meta = assetMetadata[assetType];
    if (!meta) return;

    const btn = document.createElement('button');
    btn.className = 'w-full flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border-2 border-transparent active:border-red-600 transition-all text-left';
    btn.style.borderColor = 'transparent';
    btn.onmousedown = () => btn.style.borderColor = brand.color;
    btn.onmouseup = () => btn.style.borderColor = 'transparent';
    btn.onclick = () => addAsset(assetType);

    btn.innerHTML = `
      <span class="text-4xl">${meta.emoji}</span>
      <div>
        <p class="font-black text-gray-800 leading-tight">${meta.label}</p>
        <p class="text-[10px] text-gray-400 mt-1">${meta.desc}</p>
      </div>
    `;

    buttonsContainer.appendChild(btn);
  });
}

export function initMenu() {
  const burger = document.querySelector('.burger-icon');
  if (burger) {
    burger.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      toggleMenu();
    });
  }

  renderMenuButtons();
}

export function changeBrand(brandKey) {
  if (setActiveBrand(brandKey)) {
    renderMenuButtons();
    updateBrandColor();
  }
}

function updateBrandColor() {
  const brand = getActiveBrand();
  const burger = document.querySelector('.burger-icon');
  const screenshotBtn = document.getElementById('screenshot-btn');

  if (burger) burger.style.backgroundColor = brand.color;
  if (screenshotBtn) screenshotBtn.style.borderColor = brand.color;
}
