import { Route, Routes } from "react-router-dom"

import HomeLayout from "../../../component/HomeLayout"

import CustomerAccountPage from "./CustomerAccountPage"
import LoginPage from "./LoginPage"

function _AuthRoute() {
  return (
    <Routes>
      <Route index element={<CustomerAccountPage />} />

      <Route path="/" element={<HomeLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default _AuthRoute
