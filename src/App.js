import React from 'react'
import { Auth } from './components/Auth.jsx'
import { UserInfo } from './components/UserInfo.jsx'
import { useAuth } from './lib/auth.js'

function App() {
  const { user } = useAuth()
  console.log(user)
  debugger
  return user ? <UserInfo /> : <Auth />
  /*  return <Auth />*/
}

export default App
