/**
 * Resolves a path from /public against the deploy base, so content can always use
 * "/images/x.jpg" even when the site is hosted under a sub-path (GitHub Pages).
 */
export function asset(path: string): string {
  if (/^(https?:|mailto:|data:)/.test(path)) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
