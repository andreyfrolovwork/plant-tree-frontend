import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { AuthProvider } from './lib/auth'
import { ReactQueryProvider } from './lib/react-query.jsx'
import { Button } from 'antd'
import 'antd/dist/antd.css'
const Buttons = () => {
  const clear = () => {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
  return (
    <div>
      <Button onClick={clear}>clear local/session storage</Button>
    </div>
  )
}

export default Buttons

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Buttons />
    <React.StrictMode>
      <ReactQueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ReactQueryProvider>
    </React.StrictMode>
  </div>,
)
