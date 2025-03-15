import { Route, Routes } from "react-router-dom"

import AccountInfoLayout from "./component/AccountLayout"
import InfoPage from "./page/InfoPage"

function AccountRoute() {
  return (
    <Routes >
      <Route path="/" element={<AccountInfoLayout />}>
        <Route index element={<InfoPage />} />

      </Route>
    </Routes>
  )
}

export default AccountRoute