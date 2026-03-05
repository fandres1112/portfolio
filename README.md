# Portafolio - Fabian Jaramillo

Portafolio personal como desarrollador de software. Construido con **Next.js 15** y **Tailwind CSS**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Despliegue en Vercel

### Opción 1: Desde la web (recomendado)

1. **Sube el proyecto a GitHub**
   - Crea un repositorio en [github.com](https://github.com).
   - En la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Portafolio listo para Vercel"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

2. **Conecta con Vercel**
   - Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
   - **Add New** → **Project** → importa el repositorio del portafolio.
   - Vercel detecta Next.js automáticamente (usa `vercel.json` y `package.json`).
   - Deja **Build Command**: `npm run build` y **Output Directory**: `.next`.
   - Haz clic en **Deploy**.

3. **Listo.** Tu sitio quedará en una URL como `tu-proyecto.vercel.app`. Cada `git push` a `main` generará un nuevo despliegue.

### Opción 2: Con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Sigue las preguntas (link a proyecto nuevo, carpeta actual). Para producción: `vercel --prod`.

### Comprobar el build en local

```bash
npm run build
npm run start
```

Si esto funciona, el despliegue en Vercel debería ser correcto.

## Personalización

- **Datos personales**: edita los textos en `src/components/` (Hero, About, Contact).
- **Proyectos**: modifica el array `projects` en `src/components/Projects.tsx`.
- **Habilidades**: modifica el array `skills` en `src/components/Skills.tsx`.
- **Enlaces**: actualiza GitHub, LinkedIn y email en `src/components/Contact.tsx` y en el Header si añades enlaces.

## Estructura

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    ├── Contact.tsx
    └── Footer.tsx
```
