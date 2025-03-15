import { Route, Routes } from "react-router-dom"

import _AccountRoute from '@/feature/_AccountRoute'
import _AuthRoute from '@/feature/_AuthRoute'
import AdminRoute from "@/feature/AdminRoute"
import CustomerOrderRoute from "@/feature/CustomerOrderRoute"
import CustomerRoute from "@/feature/CustomerRoute"
import CustomerTourRoute from "@/feature/CustomerTourRoute"

import ProtectAccountRoute from "./component/ProtectedPage/ProtectedAccountRoute"
import ProtectAdminRoute from "./component/ProtectedPage/ProtectedAdminRoute"
import ProtectUnAccountRoute from "./component/ProtectedPage/ProtectedUnAccountRoute"

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<ProtectUnAccountRoute children={<_AuthRoute />} />} />

      <Route path="/account/*" element={<ProtectAccountRoute children={<_AccountRoute />} />} />

      <Route path="/dashboard/*" element={<ProtectAdminRoute children={<AdminRoute />} />} />

      <Route path="/orders/*" element={<ProtectAccountRoute children={<CustomerOrderRoute />} />} />

      <Route path="/tours/*" element={<CustomerTourRoute />} />

      <Route path="/*" element={<CustomerRoute />} />
    </Routes>
  )
}

export default App 