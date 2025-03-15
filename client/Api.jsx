import axios from "axios";

export const GoogleAuth = axios.create({
  withCredentials: true,
  baseURL: " /api/auth/google"
})

export const LocalAuth = axios.create({
  withCredentials: true,
  baseURL: " /api/auth/local"
})