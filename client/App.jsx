import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { logInUser } from "@/redux/authSlice"

import _AuthRoute from '@/feature/_AuthRoute/page'
import AdminRoute from "@/feature/AdminRoute/page"
import CustomerOrderRoute from "@/feature/CustomerOrderRoute/page"
import CustomerRoute from "@/feature/CustomerRoute/page"
import CustomerTourRoute from "@/feature/CustomerTourRoute/page"

function App() {
  const dispatch = useDispatch()

  useEffect(function () {
    dispatch(logInUser({ email: "testt", matKhau: "test" }))
  }, [])

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