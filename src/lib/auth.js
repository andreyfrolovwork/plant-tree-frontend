import { initReactQueryAuth } from 'react-query-auth'
import { storage } from '../utils'
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
    await handleUserResponse(data)
    user = data
  }
  return user
}

async function loginFn(data) {
  console.log('start logins')
  console.log(data)
  const response = await AuthService.login(data)
  console.log(response)
  const user = await handleUserResponse(response.data)
  console.log(user)
  return user
}

async function registerFn(data) {
  debugger
  const response = await AuthService.signup(data)
  const user = await handleUserResponse(response.data)
  debugger
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
