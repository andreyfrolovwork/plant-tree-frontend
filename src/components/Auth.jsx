import React from 'react'
import { Login } from './Login.jsx'
import { Register } from './Register.jsx'

export function Auth() {
  const [mode, setMode] = React.useState('login')
  console.log('auth')

  return (
    <div>
      <div>
        {mode === 'login' && (
          <>
            <Login />
            <button style={{ marginTop: '20px' }} onClick={() => setMode('register')}>
              Go To Register
            </button>
          </>
        )}
      </div>
      <div>
        {mode === 'register' && (
          <>
            <Register />
            <button style={{ marginTop: '20px' }} onClick={() => setMode('login')}>
              Go To Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}
