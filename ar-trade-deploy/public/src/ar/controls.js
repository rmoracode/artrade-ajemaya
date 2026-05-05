let selectedEl = null;
let selectedType = null;

export function getSelectedElement() {
  return selectedEl;
}

export function getSelectedType() {
  return selectedType;
}

export function setSelectedElement(el, type) {
  selectedEl = el;
  selectedType = type;
}

export function transform(action, val) {
  if (!selectedEl) return;

  if (action === 'scale') {
    const s = selectedEl.object3D.scale;
    const next = Math.max(0.1, s.x + val);
    selectedEl.setAttribute('scale', `${next} ${next} ${next}`);
  } else if (action === 'rotate') {
    const r = selectedEl.object3D.rotation;
    const degY = r.y * 180 / Math.PI;
    selectedEl.setAttribute('rotation', `0 ${degY + val} 0`);
  } else if (action === 'y') {
    const p = selectedEl.object3D.position;
    selectedEl.setAttribute('position', `${p.x} ${p.y + val} ${p.z}`);
  }
}

export function deleteSelected() {
  if (selectedEl) {
    selectedEl.parentNode.removeChild(selectedEl);
    selectedEl = null;
    selectedType = null;
    return true;
  }
  return false;
}

export function clearSelection() {
  selectedEl = null;
  selectedType = null;
}
