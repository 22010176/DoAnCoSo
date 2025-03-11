import { Route, Routes } from "react-router-dom"

import HomeLayout from "@/component/HomeLayout/HomeLayout"
import ProtectAccountRoute from "@/component/ProtectedPage/ProtectedAccountRoute"
import ProtectUnAccountRoute from "@/component/ProtectedPage/ProtectedUnAccountRoute"

import CustomerAccountPage from "./CustomerAccountPage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

function _AuthRoute() {
  return (
    <Routes>
      <Route index element={
        <ProtectAccountRoute>
          <CustomerAccountPage />
        </ProtectAccountRoute>
      } />

      <Route path="/" element={
        <ProtectUnAccountRoute>
          <HomeLayout />
        </ProtectUnAccountRoute>
      }>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default _AuthRoute
