import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google"
import { useDispatch } from "react-redux"

import _AuthRoute from './feature/_AuthRoute/page'
import CustomerRoute from "./feature/CustomerRoute/page"
import AdminRoute from "./feature/AdminRoute/page"
import CustomerOrderRoute from "./feature/CustomerOrderRoute/page"
import CustomerTourRoute from "./feature/CustomerTourRoute/page"

import API from "./Api"
import { getUserInfo } from "./redux/authSlice"
import ProtectAccountRoute from "./component/ProtectedAccountRoute"
import useAuth from "./hooks/useAuth"

function App() {
  return (
    <Routes>
      <Route path="/account/*" element={<_AuthRoute />} />

      <Route path="/dashboard/*" element={<AdminRoute />} />

      <Route path="/orders/*" element={<CustomerOrderRoute />} />

      <Route path="/tours/*" element={<CustomerTourRoute />} />

      <Route path="/*" element={<CustomerRoute />} />
    </Routes>
  )
}

export default App 