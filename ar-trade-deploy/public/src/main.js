import { initARScene } from './ar/scene.js';
import { initDragHandling } from './ar/drag.js';
import { transform, deleteSelected } from './ar/controls.js';
import { initMenu, changeBrand, toggleMenu } from './ui/menu.js';
import { initEditorUI, deselectAll } from './ui/editor.js';
import { initSnapshotButton, takeSnapshot } from './ui/snapshot.js';
import { saveLayout, loadLayout, exportLayoutJSON, importLayoutJSON } from './storage/layouts.js';

window.appAPI = {
  transform,
  deleteSelected,
  deselectAll,
  toggleMenu,
  takeSnapshot,
  saveLayout,
  loadLayout,
  exportLayoutJSON,
  importLayoutJSON,
  changeBrand
};

function initApp() {
  if (!initARScene()) {
    console.error('Failed to initialize AR scene');
    return;
  }

  initDragHandling();
  initMenu();
  initEditorUI();
  initSnapshotButton();

  console.log('AR Trade app initialized');
}

document.addEventListener('DOMContentLoaded', initApp);

if (document.readyState !== 'loading') {
  initApp();
}
