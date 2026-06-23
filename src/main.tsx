import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PageShell } from './components/site/PageShell'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageShell />
  </StrictMode>,
)
