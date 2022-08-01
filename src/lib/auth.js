import { initReactQueryAuth } from 'react-query-auth'
import { storage } from '../lib/utils.js'
import AuthService from '../services/AuthService.js'

export async function handleUserResponse(data) {
  const { accessToken, user } = data
  storage.setToken(accessToken)
  return user
}

async function loadUser() {
  let user = null
  console.log('load user')
  if (storage.getToken()) {
    console.log('if (storage.getToken()) {')
    const data = await AuthService.refresh()
    console.log(data)
    user = await handleUserResponse(data.data)
  }
  console.log('loadUser', user)
  return user
}

async function loginFn(data) {
  if (data.type === 'email-auth') {
    console.log('start logins')
    console.log(data)
    const response = await AuthService.login(data.payload)
    console.log(response)
    const user = await handleUserResponse(response.data)
    console.log(user)
    console.log('loginFn', user)
    return user
  }
  if (data.type === 'telegram-auth') {
    const response = await AuthService.loginWithTg(data.payload)
    console.log(response)
    const user = await handleUserResponse(response.data)
    console.log(user)
    console.log('loginFn', user)
    return user
  }
}

async function registerFn(data) {
  debugger
  const response = await AuthService.signup(data)
  const user = await handleUserResponse(response.data)
  debugger
  console.log('reg', user)
  return user
}

async function logoutFn() {
  await storage.clearToken()
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
}

const { AuthProvider, useAuth } = initReactQueryAuth(authConfig)

export { AuthProvider, useAuth }
