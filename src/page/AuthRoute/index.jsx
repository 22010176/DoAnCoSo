import { Route, Routes } from "react-router-dom"

import CustomerAccountPage from "./CustomerAccountPage"
import LoginPage from "./LoginPage"

function AuthRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/customer" element={<CustomerAccountPage />} />
    </Routes>
  )
}

export default AuthRoute