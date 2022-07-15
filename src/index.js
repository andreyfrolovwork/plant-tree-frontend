import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { AuthProvider } from './lib/auth'
import { ReactQueryProvider } from './lib/react-query.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ReactQueryProvider>
  </React.StrictMode>,
)
