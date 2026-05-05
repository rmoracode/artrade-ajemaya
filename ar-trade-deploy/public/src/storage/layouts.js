import { getWorld } from '../ar/scene.js';
import { buildAssetHTML } from '../assets/catalog.js';

const STORAGE_KEY = 'aje-trade-layout';

function serializeLayout() {
  const world = getWorld();
  if (!world) return [];

  const assets = [];
  for (const child of world.children) {
    if (child.classList.contains('clickable')) {
      const pos = child.getAttribute('position');
      const rot = child.getAttribute('rotation');
      const scale = child.getAttribute('scale');

      assets.push({
        type: child.dataset.assetType || 'cooler',
        position: { x: pos.x, y: pos.y, z: pos.z },
        rotation: { x: rot.x, y: rot.y, z: rot.z },
        scale: { x: scale.x, y: scale.y, z: scale.z }
      });
    }
  }
  return assets;
}

export function saveLayout() {
  const layout = serializeLayout();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  console.log('Layout saved:', layout);
  return true;
}

export function loadLayout() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return false;

  const layout = JSON.parse(stored);
  const world = getWorld();
  if (!world) return false;

  world.innerHTML = '';

  layout.forEach(asset => {
    const el = document.createElement('a-entity');
    el.setAttribute('class', 'clickable');
    el.dataset.assetType = asset.type;
    el.setAttribute('position', `${asset.position.x} ${asset.position.y} ${asset.position.z}`);
    el.setAttribute('rotation', `${asset.rotation.x} ${asset.rotation.y} ${asset.rotation.z}`);
    el.setAttribute('scale', `${asset.scale.x} ${asset.scale.y} ${asset.scale.z}`);

    el.innerHTML = buildAssetHTML(asset.type);
    world.appendChild(el);
  });

  console.log('Layout loaded:', layout);
  return true;
}

export function exportLayoutJSON() {
  const layout = serializeLayout();
  const json = JSON.stringify(layout, null, 2);

  const link = document.createElement('a');
  link.download = `AJE-Layout-${Date.now()}.json`;
  link.href = 'data:application/json,' + encodeURIComponent(json);
  link.click();
}

export function importLayoutJSON(file) {
  if (!file) return false;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const layout = JSON.parse(e.target.result);
      const world = getWorld();
      if (!world) return;

      world.innerHTML = '';

      layout.forEach(asset => {
        const el = document.createElement('a-entity');
        el.setAttribute('class', 'clickable');
        el.dataset.assetType = asset.type;
        el.setAttribute('position', `${asset.position.x} ${asset.position.y} ${asset.position.z}`);
        el.setAttribute('rotation', `${asset.rotation.x} ${asset.rotation.y} ${asset.rotation.z}`);
        el.setAttribute('scale', `${asset.scale.x} ${asset.scale.y} ${asset.scale.z}`);

        el.innerHTML = buildAssetHTML(asset.type);
        world.appendChild(el);
      });

      console.log('Layout imported:', layout);
    } catch (err) {
      console.error('Failed to import layout:', err);
    }
  };
  reader.readAsText(file);
  return true;
}
