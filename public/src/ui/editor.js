import { getSelectedElement, getSelectedType, setSelectedElement, clearSelection } from '../ar/controls.js';

export function showEditor() {
  const editor = document.getElementById('editor-ui');
  if (editor) editor.style.display = 'flex';
}

export function hideEditor() {
  const editor = document.getElementById('editor-ui');
  if (editor) editor.style.display = 'none';
}

export function updateEditorTitle(type) {
  const title = document.getElementById('selected-name');
  if (title) {
    title.innerText = `Editando: ${type.toUpperCase()}`;
  }
}

export function selectElement(el, type) {
  setSelectedElement(el, type);
  updateEditorTitle(type);
  showEditor();
}

export function deselectAll() {
  clearSelection();
  hideEditor();
}

export function initEditorUI() {
  // Button clicks are handled via onclick in HTML
}
