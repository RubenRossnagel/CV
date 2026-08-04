# Portafolio · Rubén Rossnagel

Sitio estático de portafolio profesional (React + Vite + Tailwind v4), listo para publicar en **GitHub Pages**.

Diseño guiado por [Taste Skill](https://www.tasteskill.dev/) (`design-taste-frontend`).

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida queda en `dist/`.

## Publicar en GitHub Pages

El repo incluye `.github/workflows/deploy.yml`. Al pushear a `main`, GitHub Actions buildea y publica automáticamente.

1. En el repo: **Settings → Pages**.
2. **Source:** GitHub Actions (no “Deploy from a branch”).
3. Pusheá el workflow (y el resto del código) a `main`.
4. Revisá el run en la pestaña **Actions**.
5. La URL queda en: `https://rubenrossnagel.github.io/CV/`

Si preferís el método manual con carpeta `docs`:

```bash
npm run pages:docs
```

Y en Pages elegí branch `main` / folder `/docs`.

## Contenido

Los datos del CV viven en `src/data/content.ts` (extraídos de tu Curriculum Vitae en Notion).
