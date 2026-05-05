export function getWorld() {
  return document.getElementById('world');
}

export function getScene() {
  return document.querySelector('a-scene');
}

export function getCursorDot() {
  return document.getElementById('cursor-dot');
}

export function initARScene() {
  const scene = getScene();
  if (!scene) {
    console.error('A-Frame scene not found');
    return false;
  }

  // Configurar preserveDrawingBuffer cuando el renderer esté listo
  scene.addEventListener('loaded', () => {
    if (scene.renderer) {
      scene.renderer.preserveDrawingBuffer = true;
      console.log('✓ preserveDrawingBuffer activado en scene loaded');
    }
  });

  // Fallback si 'loaded' ya se disparó
  setTimeout(() => {
    if (scene.renderer && !scene.renderer.preserveDrawingBuffer) {
      scene.renderer.preserveDrawingBuffer = true;
      console.log('✓ preserveDrawingBuffer activado en timeout');
    }
  }, 500);

  return true;
}
