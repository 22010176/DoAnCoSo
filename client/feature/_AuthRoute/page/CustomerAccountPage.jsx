import { Route, Routes } from "react-router-dom"

import AccountInfoLayout from "../component/AccountInfoLayout"
import AccountInfoPage from "../component/AccountInfoPage"

function CustomerAccountPage() {
  return (
    <Routes >
      <Route path="/" element={<AccountInfoLayout />}>
        <Route index element={<AccountInfoPage />} />
      </Route>
    </Routes>
  )
}

export default CustomerAccountPage