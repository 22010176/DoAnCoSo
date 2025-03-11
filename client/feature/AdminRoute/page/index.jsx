import { Routes, Route } from "react-router-dom";

import DashboardLayout from "component/DashboardLayout/DashboardLayout";
import ProtectAdminRoute from "component/ProtectedPage/ProtectedAdminRoute";

import DashboardPage from "./DashboardPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectAdminRoute>
          <DashboardLayout />
        </ProtectAdminRoute>
      }>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute