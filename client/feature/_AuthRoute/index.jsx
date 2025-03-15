import { Route, Routes } from "react-router-dom"

import HomeLayout from "@/component/HomeLayout"

import LoginPage from "./page/LoginPage"
import RegisterPage from "./page/RegisterPage"



function _AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default _AuthRoute
