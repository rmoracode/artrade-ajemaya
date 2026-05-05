# 🚀 AR Trade

**Aplicación web de Realidad Aumentada para diseño y visualización de espacios comerciales.**

Construida con:
- **A-Frame 1.2.0** — WebXR 3D rendering
- **AR.js** — Markerless Augmented Reality
- **Vanilla JavaScript** — Sin frameworks, cero dependencias en frontend
- **Express.js** — Servidor Node.js simple y escalable

## 📋 Quick Start

### Opción 1: Local con Node.js
```bash
npm install
npm start
```
Accede a `http://localhost:3000`

### Opción 2: Docker
```bash
docker-compose up
```

---

## 🌐 Despliegue en Producción

### ✅ Vercel

```bash
npm install -g vercel
vercel
```

**Ventajas:**
- Despliegue automático desde GitHub
- SSL gratuito
- CDN global

---

### ✅ Railway

1. Ve a [railway.app](https://railway.app)
2. "Create New Project"
3. "Deploy from GitHub"
4. Selecciona tu repositorio
5. ¡Automático!

**Ventajas:**
- Setup automático
- Despliegue por push
- Dashboard intuitivo

---

### ✅ EasyPanel / Docker

```bash
docker build -t ar-trade .
docker run -p 3000:3000 ar-trade
```

O si tienes EasyPanel:
1. Nuevo proyecto
2. Docker Repository
3. Apunta a tu GitHub
4. ¡Automático!

---

## 📂 Estructura

```
ar-trade-deploy/
├── public/                      ← Archivos servidos (HTML, CSS, JS)
│   ├── index.html
│   └── src/
│       ├── main.js
│       ├── styles.css
│       ├── ar/
│       ├── ui/
│       ├── config/
│       ├── assets/
│       └── storage/
├── server.js                    ← Servidor Express
├── package.json                 ← Dependencias
├── Dockerfile                   ← Container
├── docker-compose.yml           ← Docker local
├── vercel.json                  ← Vercel config
├── railway.json                 ← Railway config
├── .gitignore
├── .env.example
├── README.md
├── INICIO_RAPIDO.md
└── DEPLOY_GUIDE.md
```

---

## 🎮 Características

- ✨ **Realidad Aumentada Markerless** — Sin códigos QR
- 🎨 **Múltiples Marcas** — Selector con colores y logos
- 📦 **5+ Tipos de Activos** — Cooler, Afiches, Islas, Góndolas, Displays
- 🖱️ **Drag & Drop** — Repositiona en X/Z
- ↕️ **Transformaciones** — Altura, escala, rotación
- 📸 **Snapshots** — Captura pantalla AR
- 💾 **Persistencia** — Guarda/carga layouts
- 📱 **Mobile-Ready** — Android/iOS compatible

---

## 🔧 Variables de Entorno

Copia `.env.example` a `.env`:

```env
PORT=3000
NODE_ENV=production
PUBLIC_URL=https://tu-dominio.com
```

---

## 📱 Uso en Mobile

Para acceder desde teléfono:

```bash
npm start -- --host
```

Luego desde tu dispositivo:
```
https://tu-ip-local:3000
```

**Nota:** AR.js requiere HTTPS o localhost.

---

## 🔒 Permisos

AR.js solicita acceso a cámara. **Permite el acceso** para funcionar.

---

## 📊 Dependencias

- `express@^4.18.2` — Web server
- `a-frame@1.2.0` — CDN
- `ar.js` — CDN
- `tailwind.css` — CDN

**Sin dependencias de frontend** (vanilla JS).

---

## 🐛 Troubleshooting

### "404 Not Found"
El servidor redirige todo a index.html. Está configurado.

### "AR no funciona"
- Permite acceso a cámara
- Usa HTTPS en producción
- Buena iluminación

### "Puerto en uso"
```bash
PORT=8000 npm start
```

---

## 📝 Licencia

MIT

---

**¡Lista para deploy!** Sigue `INICIO_RAPIDO.md`
