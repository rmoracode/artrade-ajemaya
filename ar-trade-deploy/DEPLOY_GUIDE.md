# 🚀 Guía Completa de Deploy

## 0️⃣ Preparación

```bash
npm install
npm start
```

Abre `http://localhost:3000` y verifica que todo funciona.

---

## 1️⃣ Sube a GitHub

```bash
git init
git add .
git commit -m "Initial commit: AR Trade"
git remote add origin https://github.com/TU-USUARIO/ar-trade.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Elige tu Plataforma

### 🟦 VERCEL (Recomendado - Muy simple)

**Desde tu máquina:**
```bash
npm install -g vercel
vercel
```

Sigue los prompts:
- Framework: `Other`
- Root directory: `.`
- Build: `npm run build`
- Output: `public`

**O desde web:**
1. Ve a [vercel.com](https://vercel.com)
2. "New Project"
3. "Import Git Repository"
4. Selecciona tu repo
5. ¡Automático!

**URL:** `tu-proyecto.vercel.app`

✅ Deploy automático en cada push a GitHub

---

### 🚂 RAILWAY (Recomendado - Muy fácil)

1. Ve a [railway.app](https://railway.app)
2. Click "Create New Project"
3. "Deploy from GitHub repo"
4. Selecciona `ar-trade`
5. Railway detecta Node.js automáticamente
6. Configura variables (opcional):
   - `NODE_ENV`: `production`
   - `PORT`: `$PORT` (automático)
7. Click "Deploy"

**URL:** `tu-proyecto-xxxxx.railway.app`

✅ Deploy automático en cada push a GitHub

---

### 🖥️ EASYPANEL (Control Total)

Si tienes un servidor con EasyPanel:

1. Ve a tu panel EasyPanel
2. "Create New Application"
3. "Docker"
4. Pega el Dockerfile:
   ```
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   EXPOSE 3000
   ENV NODE_ENV=production
   CMD ["npm", "start"]
   ```
5. O conecta GitHub directamente
6. Deploy

✅ Control total con Docker

---

### 🐳 DOCKER (Cualquier servidor)

```bash
# Build
docker build -t ar-trade .

# Run
docker run -p 3000:3000 ar-trade

# O con compose
docker-compose up
```

**Para producción:**
- Usa Docker Registry (Docker Hub, ECR, etc.)
- Push a tu registry
- Pull desde tu servidor

---

### 🌍 OTROS SERVIDORES

#### Heroku
```bash
heroku login
heroku create tu-app-name
git push heroku main
heroku open
```

#### DigitalOcean App Platform
1. Conecta GitHub
2. Selecciona este repo
3. Detecta Node.js
4. Deploy

#### Render
1. [render.com](https://render.com)
2. "Create" → "Web Service"
3. Conecta GitHub
4. Build: `npm install`
5. Start: `npm start`

#### Fly.io
```bash
flyctl launch
flyctl deploy
```

---

## 📋 Checklist Pre-Deploy

- [ ] `npm install` ejecutado
- [ ] `npm start` funciona en localhost:3000
- [ ] La AR se ve en el navegador
- [ ] Todo commitido a GitHub
- [ ] Elegí una plataforma
- [ ] Deploy iniciado
- [ ] URL en vivo ✨

---

## 🆘 Troubleshooting

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### "Port 3000 already in use"
```bash
PORT=8000 npm start
```

### "Permission denied" en setup.sh (Mac/Linux)
```bash
chmod +x setup.sh
./setup.sh
```

### "Archivo no encontrado en servidor"
Verifica que `public/` contenga todos los archivos.

### "AR no funciona"
- Permite acceso a cámara
- Usa HTTPS en producción (todos los servidores lo tienen)
- Buena iluminación

### "404 en navegación"
El servidor redirige todo a `index.html` automáticamente. Si persiste, verifica `server.js`.

---

## 🔐 Variables de Entorno

Si necesitas variables especiales, crealas en `.env`:

```env
PORT=3000
NODE_ENV=production
PUBLIC_URL=https://tu-dominio.com
```

Luego en tu plataforma (Vercel, Railway, etc.):
- Vercel: Project Settings → Environment Variables
- Railway: Variables tab
- EasyPanel: Environment → Variables

---

## 🚀 Monitoreo Después del Deploy

Todos los servidores ofrecen:
- Logs en tiempo real
- Métricas (CPU, memoria, requests)
- Alertas de caídas
- Redeploy manual

Accede a tu dashboard y monitorea.

---

## 🔄 Actualizaciones

Simplemente haz push a GitHub:

```bash
git add .
git commit -m "Update"
git push
```

Vercel y Railway redeploy automáticamente. EasyPanel detecta cambios en el repo (si está configurado así).

---

## 📞 Soporte

Cada plataforma tiene:
- Documentación oficial
- Community chat/forums
- Email support

Antes de contactar, verifica:
1. Los logs del servidor
2. Variables de entorno
3. El archivo `.env.example`

---

**¡Listo para ir al mundo!** 🌍
