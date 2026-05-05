export const brands = {
  aje: {
    name: 'AJE / Big Cola',
    color: '#e30613',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Big_Cola_logo.svg/1200px-Big_Cola_logo.svg.png',
    assets: ['cooler', 'afiche', 'isla', 'gondola', 'display']
  },
  ejemplo: {
    name: 'Marca Ejemplo',
    color: '#0066cc',
    logo: 'https://via.placeholder.com/200?text=Logo',
    assets: ['cooler', 'afiche', 'isla']
  }
};

export let activeBrand = 'aje';

export function setActiveBrand(brandKey) {
  if (brands[brandKey]) {
    activeBrand = brandKey;
    return true;
  }
  return false;
}

export function getActiveBrand() {
  return brands[activeBrand];
}
