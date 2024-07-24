// Imports
import axios from 'axios'

// Initiate new axios instance
const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
    "Accept": "*/*",
  },
})

// Request interceptor
const requestInterceptor = request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// Response interceptor
const responseInterceptor = request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    console.log("error.response", error.response)
  }
  else if (error.request) {
    console.log("error.request", error.request)
  }
  else {
    console.log("Unexpected error", error.message)
  }

  return Promise.reject(error)
})

export default request
