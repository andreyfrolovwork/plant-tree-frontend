import $api from './../api/api.js'

export default class AuthService {
  static async login(data) {
    const { email, password } = data
    return $api.post('/login', { email, password })
  }

  static async signup(newUser) {
    const { email, password } = newUser
    return $api.post('/signup', { email, password })
  }

  static async logout() {
    return $api.post('/logout')
  }

  static async refresh() {
    return $api.get('/refresh')
  }
}
