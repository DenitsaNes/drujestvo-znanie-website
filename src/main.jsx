import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import '@fontsource/golos-text/400.css'
import '@fontsource/golos-text/500.css'
import '@fontsource/golos-text/600.css'
import '@fontsource/literata/500.css'
import '@fontsource/literata/600.css'
import '@fontsource/literata/700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
