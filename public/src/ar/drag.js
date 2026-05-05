import { getSelectedElement, setSelectedElement } from './controls.js';
import { getCursorDot } from './scene.js';

let isDragging = false;
let lastX = 0;
let lastY = 0;

function handleDragStart(e) {
  isDragging = true;
  lastX = e.clientX || e.touches?.[0]?.clientX || 0;
  lastY = e.clientY || e.touches?.[0]?.clientY || 0;
  const cursor = getCursorDot();
  if (cursor) cursor.setAttribute('material', 'color: #00ff00');
}

function handleDragMove(e) {
  if (!isDragging || !getSelectedElement()) return;

  const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
  const currentY = e.clientY || e.touches?.[0]?.clientY || 0;

  const deltaX = (currentX - lastX) * 0.01;
  const deltaY = (currentY - lastY) * 0.01;

  const el = getSelectedElement();
  const pos = el.object3D.position;

  el.setAttribute('position', `${pos.x + deltaX} ${pos.y} ${pos.z + deltaY}`);

  lastX = currentX;
  lastY = currentY;
}

function handleDragEnd() {
  isDragging = false;
  const cursor = getCursorDot();
  if (cursor) cursor.setAttribute('material', 'color: #e30613');
}

export function initDragHandling() {
  window.addEventListener('mousedown', handleDragStart);
  window.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);

  window.addEventListener('touchstart', handleDragStart);
  window.addEventListener('touchmove', handleDragMove);
  window.addEventListener('touchend', handleDragEnd);
}
