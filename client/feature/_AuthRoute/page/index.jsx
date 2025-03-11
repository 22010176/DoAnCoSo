import { Route, Routes } from "react-router-dom"

import HomeLayout from "@/component/HomeLayout/HomeLayout"
import ProtectUnAccountRoute from "@/component/ProtectedPage/ProtectedUnAccountRoute"

import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

function _AuthRoute() {
  return (
    <Routes>
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
