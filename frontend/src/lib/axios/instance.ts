// lib/axios.ts
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  withCredentials: true, // opsional, jika butuh kirim cookie/session
  headers: {
    "Content-Type": "application/json",
  },
})
  
// Optional: Interceptor for request (e.g., inject token)
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = getTokenFromSomewhere()
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// Optional: Interceptor for response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: Redirect to login or show message
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
