import { deselectAll } from './editor.js';

export function takeSnapshot() {
  deselectAll();

  setTimeout(() => {
    const scene = document.querySelector('a-scene');
    const video = document.querySelector('video');
    const snapshotCanvas = document.getElementById('snapshot-canvas');

    if (!scene || !video || !snapshotCanvas) {
      console.error('Required elements not found for snapshot');
      return;
    }

    const ctx = snapshotCanvas.getContext('2d', {willReadFrequently: true});

    if (video.videoWidth > 0 && video.videoHeight > 0) {
      snapshotCanvas.width = video.videoWidth;
      snapshotCanvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
      console.log('✓ Video dibujado en canvas');

      // Intentar usar el renderer de Three.js directamente
      if (scene.renderer && scene.renderer.render) {
        console.log('Intentando capturar con Three.js renderer...');
        try {
          // Forzar un render para asegurar que todo está actualizado
          scene.renderer.render(scene.object3D, scene.camera);
          console.log('✓ Renderer renderizado');

          // Ahora leer el canvas
          const aframeCanvas = scene.renderer.domElement;
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0);
            console.log('✓ Canvas de Three.js dibujado correctamente');
            downloadSnapshot(snapshotCanvas);
          };
          img.onerror = () => {
            console.warn('Error cargando canvas de Three.js');
            downloadSnapshot(snapshotCanvas);
          };
          img.src = aframeCanvas.toDataURL('image/png');
          return;
        } catch (e) {
          console.warn('Error con Three.js renderer:', e.message);
        }
      }

      // Fallback: método anterior
      const aframeCanvas = scene.canvas || scene.renderer?.domElement || document.querySelector('a-scene canvas');
      if (aframeCanvas) {
        console.log('Usando fallback: canvas encontrado', aframeCanvas.width, 'x', aframeCanvas.height);
        try {
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0);
            downloadSnapshot(snapshotCanvas);
          };
          img.onerror = () => {
            downloadSnapshot(snapshotCanvas);
          };
          img.src = aframeCanvas.toDataURL('image/png');
          return;
        } catch (e) {
          console.warn('Fallback también falló:', e.message);
        }
      }

      downloadSnapshot(snapshotCanvas);
    } else {
      console.warn('Video not ready yet');
    }
  }, 1000);
}

function downloadSnapshot(snapshotCanvas) {
  const link = document.createElement('a');
  link.download = `AJE-Layout-${Date.now()}.png`;
  link.href = snapshotCanvas.toDataURL('image/png');
  link.click();
  console.log('✓ Screenshot descargado');
}

export function initSnapshotButton() {
  // Button click is handled via onclick in HTML
}
