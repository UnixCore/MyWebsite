import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/schibsted-grotesk/index.css'
import '@fontsource/martian-mono/400.css'
import '@fontsource/martian-mono/500.css'
import './styles/global.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
