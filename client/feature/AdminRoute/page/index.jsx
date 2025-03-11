import { Routes, Route } from "react-router-dom";

import AdminLayout from "@/component/AdminLayout/AdminLayout";
import ProtectAdminRoute from "@/component/ProtectedPage/ProtectedAdminRoute";

import DashboardPage from "./DashboardPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectAdminRoute>
          <AdminLayout />
        </ProtectAdminRoute>
      }>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute