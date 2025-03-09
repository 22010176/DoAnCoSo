import axios from "axios";

const API = axios.create({ withCredentials: true, baseURL: "/api" })

export default API