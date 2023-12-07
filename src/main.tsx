import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/tailwind.css'
import Router from './pages/router.tsx'
import './assets/i18n/config.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
