import axios from "axios";

export const GoogleAuth = axios.create({
  withCredentials: true,
  baseURL: "/api/auth/google"
})

export const LocalAuth = axios.create({
  withCredentials: true,
  baseURL: "/api/auth/local"
})

export const GetResource = axios.create({
  withCredentials: true,
  baseURL: "/api/resource"
})

export const TourResource = axios.create({
  withCredentials: true,
  baseURL: "/api/tour",
})