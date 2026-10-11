/// <reference types="vitest/config" />
import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'

/**
 * Hosts like GitHub Pages cannot send HTTP headers, so the production build also carries
 * the Content-Security-Policy as a <meta> tag. The policy is read from the nginx snippet,
 * which stays the single source of truth. `frame-ancestors` is dropped because browsers
 * ignore it in <meta>; the HTTP header (nginx, Netlify, Cloudflare) still enforces it.
 */
function cspMeta(): Plugin {
  const conf = readFileSync(new URL('./deploy/nginx/security-headers.conf', import.meta.url), 'utf8')
  const match = conf.match(/add_header Content-Security-Policy "([^"]+)"/)
  if (!match) throw new Error('Content-Security-Policy not found in deploy/nginx/security-headers.conf')
  const policy = match[1]
    .split(';')
    .map((d) => d.trim())
    .filter((d) => d && !d.startsWith('frame-ancestors'))
    .join('; ')
  return {
    name: 'csp-meta',
    apply: 'build',
    transformIndexHtml: () => [
      { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: policy }, injectTo: 'head-prepend' },
    ],
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Set BASE_PATH=/repo-name/ when hosting under a sub-path (e.g. GitHub Pages project sites).
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), cspMeta()],
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
