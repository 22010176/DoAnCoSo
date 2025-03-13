import { Route, Routes } from "react-router-dom"

import HomeLayout from "@/component/HomeLayout/HomeLayout"

import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"



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
