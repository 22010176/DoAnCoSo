import { Route, Routes } from "react-router-dom";

import AdminLayout from "@admin/component/AdminLayout";

import CustomersRoute from "@admin/feature/CustomersRoute";
import OrdersRoute from "@admin/feature/OrdersRoute";
import ToursRoute from "@admin/feature/ToursRoute";

import DashboardPage from "./page/DashboardPage";
import StatisticPage from "./page/StatisticPage";

function AdminRoute() {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />

      <Route element={<AdminLayout />}>
        <Route path="/statistic" element={<StatisticPage />} />

        <Route path="/tours/*" element={<ToursRoute />} />
        <Route path="/orders/*" element={<OrdersRoute />} />
        <Route path="/customers/*" element={<CustomersRoute />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute