import { Route, Routes } from "react-router-dom"

import AccountInfoLayout from "./component/AccountLayout"
import InfoPage from "./page/InfoPage"
import OrderListPage from "./page/OrderListPage"
import ChangePasswordPage from "./page/ChangePasswordPage"
import OrderDetailPage from "./page/OrderDetailPage"

function AccountRoute() {
  return (
    <Routes >
      <Route path="/" element={<AccountInfoLayout />}>
        <Route index element={<InfoPage />} />
        <Route path="/orders" element={<OrderListPage />} />
        <Route path="/orders/:orderId" element={<OrderDetailPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  )
}

export default AccountRoute