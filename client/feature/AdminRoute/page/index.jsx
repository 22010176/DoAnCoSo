import { Routes, Route } from "react-router-dom";

import DashboardLayout from "component/DashboardLayout/DashboardLayout";

import DashboardPage from "./DashboardPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute