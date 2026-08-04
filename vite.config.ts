import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' para que GitHub Pages (project site o user site) resuelva assets relativos.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
