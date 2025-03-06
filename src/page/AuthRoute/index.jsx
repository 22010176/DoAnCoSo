import { Route, Routes } from "react-router-dom"

import CustomerAccountPage from "./CustomerAccountPage"

function AuthRoute() {
  return (
    <Routes>
      <Route path="/customer" element={<CustomerAccountPage />} />
    </Routes>
  )
}

export default AuthRoute