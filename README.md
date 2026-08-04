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

## Publicar en GitHub Pages (manual)

1. Subí el repo a GitHub.
2. En el repo: **Settings → Pages**.
3. Source: **GitHub Actions** o **Deploy from a branch**.
4. Opción simple sin Actions:
   - Corré `npm run build` en tu máquina.
   - Subí el contenido de `dist/` a la rama `gh-pages`, **o** configurá Pages para servir desde `/docs` y copiá `dist/` a `docs/`.
5. Si usás project site (`usuario.github.io/nombre-repo/`), el proyecto ya usa `base: './'` en `vite.config.ts`, así que los assets relativos funcionan.

### Opción recomendada: carpeta `docs`

```bash
npm run pages:docs
```

Eso genera `docs/` con el build. En GitHub Pages elegí branch `main` / folder `/docs`. Luego subí los cambios cuando quieras.

## Contenido

Los datos del CV viven en `src/data/content.ts` (extraídos de tu Curriculum Vitae en Notion).
