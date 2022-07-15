import axios from 'axios'
import config from './../config/config.js'

const $api = axios.create({
  withCredentials: true,
  baseURL: config.API_URL,
})

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(`${config.API_URL}/refresh`, {
          withCredentials: true,
        })

        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {
        localStorage.removeItem('token')
        throw error
      }
    }
    return Promise.reject(error)
  },
)

export default $api
