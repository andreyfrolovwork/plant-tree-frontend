import React from 'react'
import { Auth } from './components/Auth.jsx'
import { UserInfo } from './components/UserInfo.jsx'
import { useAuth } from './lib/auth.js'
import './index.css'

function App() {
  const { user } = useAuth()
  return user ? <UserInfo /> : <Auth />
}

export default App
