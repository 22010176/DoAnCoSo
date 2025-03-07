import { Routes, Route } from "react-router-dom";

import DashboardPage from "./DashboardPage";

function AdminRoute() {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
    </Routes>
  )
}

export default AdminRoute