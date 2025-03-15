import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"


import _AccountRoute from '@/feature/_AccountRoute/page'
import _AuthRoute from '@/feature/_AuthRoute/page'
import AdminRoute from "@/feature/AdminRoute/page"
import CustomerOrderRoute from "@/feature/CustomerOrderRoute/page"
import CustomerRoute from "@/feature/CustomerRoute/page"
import CustomerTourRoute from "@/feature/CustomerTourRoute/page"

import ProtectAccountRoute from "./component/ProtectedPage/ProtectedAccountRoute"
import ProtectAdminRoute from "./component/ProtectedPage/ProtectedAdminRoute"
import ProtectUnAccountRoute from "./component/ProtectedPage/ProtectedUnAccountRoute"

function App() {
  const dispatch = useDispatch()

  useEffect(function () {
    // dispatch(logInUser({ email: "testt", password: "test" }))

    // const result = GoogleAuth.get('/profile')
    //   .then(res => console.log(res.data))
  }, [])

  return (
    <Routes>
      <Route path="/auth/*" element={
        <ProtectUnAccountRoute>
          <_AuthRoute />
        </ProtectUnAccountRoute>
      } />

      <Route path="/account/*" element={
        <ProtectAccountRoute>
          <_AccountRoute />
        </ProtectAccountRoute>
      } />

      <Route path="/dashboard/*" element={
        <ProtectAdminRoute>
          <AdminRoute />
        </ProtectAdminRoute>
      } />

      <Route path="/orders/*" element={
        <ProtectAccountRoute>
          <CustomerOrderRoute />
        </ProtectAccountRoute>
      } />

      <Route path="/tours/*" element={<CustomerTourRoute />} />

      <Route path="/*" element={<CustomerRoute />} />
    </Routes>
  )
}

export default App 