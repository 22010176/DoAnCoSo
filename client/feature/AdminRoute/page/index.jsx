import { Route, Routes } from "react-router-dom";


import AdminLayout from "@admin/component/AdminLayout/AdminLayout";
import TourRoute from "@admin/feature/TourRoute/page/TourRoute";

import DashboardPage from "./DashboardPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="/tours/*" element={<TourRoute />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute