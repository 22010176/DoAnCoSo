import axios from "axios";

const API = axios.create({ withCredentials: true, baseURL: "/api" })

export const GoogleAuth = axios.create({
  withCredentials: true,
  baseURL: " /api/auth/google"
})

export const LocalAuth = axios.create({
  withCredentials: true,
  baseURL: " /api/auth/local"
})

export default API