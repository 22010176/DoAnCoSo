import { Route, Routes } from "react-router-dom"

import CustomerAccountPage from "../feature/AuthRoute/page/CustomerAccountPage"
import LoginPage from "../feature/AuthRoute/page/LoginPage"

function AuthRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/customer" element={<CustomerAccountPage />} />
    </Routes>
  )
}

export default AuthRoute