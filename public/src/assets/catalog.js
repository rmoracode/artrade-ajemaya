import { getActiveBrand } from '../config/brands.js';

export function buildAssetHTML(type) {
  const brand = getActiveBrand();
  const logo = brand.logo;

  const templates = {
    cooler: `
      <a-box width="0.7" height="1.8" depth="0.7" color="#ffffff">
        <a-plane position="0 0 0.36" width="0.65" height="1.7" material="color: #a0d8ef; opacity: 0.4; transparent: true"></a-plane>
        <a-box position="0 0.95 0" width="0.75" height="0.15" depth="0.75" color="${brand.color}"></a-box>
        <a-image src="${logo}" position="0 0.95 0.38" width="0.45" height="0.12"></a-image>
      </a-box>`,

    afiche: `
      <a-box width="0.8" height="1.2" depth="0.05" color="${brand.color}">
        <a-image src="${logo}" position="0 0.3 0.03" width="0.6" height="0.25"></a-image>
        <a-text value="PUNTO DE ORO" align="center" position="0 -0.2 0.03" scale="0.5 0.5 0.5" color="white"></a-text>
      </a-box>`,

    isla: `
      <a-box width="1.2" height="0.8" depth="1.2" color="${brand.color}">
        <a-box position="0 0.45 0" width="1.25" height="0.05" depth="1.25" color="#fff"></a-box>
        <a-image src="${logo}" position="0 0 0.61" width="0.8" height="0.3"></a-image>
      </a-box>`,

    gondola: `
      <a-box width="2.0" height="1.6" depth="0.6" color="${brand.color}">
        <a-box position="0 0.9 0" width="2.1" height="0.05" depth="0.7" color="#fff"></a-box>
        <a-image src="${logo}" position="0 0.2 0.31" width="1.2" height="0.4"></a-image>
      </a-box>`,

    display: `
      <a-box width="0.6" height="2.2" depth="0.6" color="${brand.color}">
        <a-box position="0 1.2 0" width="0.65" height="0.1" depth="0.65" color="#fff"></a-box>
        <a-image src="${logo}" position="0 0.5 0.31" width="0.4" height="0.6"></a-image>
      </a-box>`
  };

  return templates[type] || templates.cooler;
}

export const assetMetadata = {
  cooler: { emoji: '❄️', label: 'COOLER', desc: 'Exhibición de frío' },
  afiche: { emoji: '📄', label: 'AFICHE', desc: 'Material de visibilidad' },
  isla: { emoji: '📦', label: 'ISLA', desc: 'Punto de venta masivo' },
  gondola: { emoji: '🏗️', label: 'GÓNDOLA', desc: 'Expositor de piso' },
  display: { emoji: '🎯', label: 'DISPLAY', desc: 'Torre promocional' }
};
