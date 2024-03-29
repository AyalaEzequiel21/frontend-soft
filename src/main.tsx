import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { ThemeConfig } from './config/theme.config.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeConfig>
  </React.StrictMode>,
)
