# Portafolio - Fabian Jaramillo

Portafolio personal como desarrollador de software. **Next.js 15**, **TypeScript** y **Tailwind CSS**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

1. Sube el proyecto a GitHub e importa el repo en [vercel.com](https://vercel.com) (**Add New** → **Project**).
2. Vercel detecta Next.js; deja **Build Command** y **Output** por defecto. **Deploy**.
3. Cada `git push` a `main` genera un nuevo despliegue.

**O con CLI:** `npm i -g vercel` → `vercel login` → `vercel` (producción: `vercel --prod`).

**Comprobar build en local:** `npm run build` y `npm run start`.

### Variable de entorno (opcional)

En Vercel → Project → **Settings** → **Environment Variables** puedes definir:

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio (ej. `https://portfolio-fandres1112.vercel.app`). Se usa en Open Graph, sitemap y robots.

Si no la defines, el proyecto usa por defecto la URL de Vercel indicada en `src/data/site.ts`.

## Personalización

- **Nombre, URL del sitio, navegación y enlaces de contacto:** todo en **`src/data/site.ts`**. Un solo archivo para mantener el resto del sitio al día.
- **Textos (Hero, About):** `src/components/Hero.tsx` y `src/components/About.tsx`.
- **Proyectos:** array `projects` en `src/components/Projects.tsx`.
- **Habilidades:** array `skills` en `src/components/Skills.tsx`.

## Estructura

```
src/
├── app/
│   ├── globals.css
│   ├── icon.tsx          # Favicon generado (iniciales FJ)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts         # /robots.txt
│   └── sitemap.ts        # /sitemap.xml
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── site.ts           # Datos del sitio (nombre, url, nav, contacto)
```

## Scripts

| Comando       | Uso                    |
|---------------|------------------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción  |
| `npm run start` | Servir build local  |
| `npm run lint` | ESLint                |
