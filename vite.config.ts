/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Set BASE_PATH=/repo-name/ when hosting under a sub-path (e.g. GitHub Pages project sites).
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  build: {
    target: 'es2022',
    sourcemap: false,
    // No inline polyfill script, so the CSP can keep `script-src 'self'`.
    modulePreload: { polyfill: false },
    // Never inline assets as data: URIs, so the CSP can keep `font-src 'self'`.
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
