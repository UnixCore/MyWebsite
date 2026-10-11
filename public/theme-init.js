// Runs before the first paint to apply the saved theme and avoid a flash.
// Kept as an external file so the Content-Security-Policy can forbid inline scripts.
;(function () {
  var theme
  try {
    theme = localStorage.getItem('theme')
  } catch {
    theme = null
  }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.setAttribute('data-theme', theme)
})()
