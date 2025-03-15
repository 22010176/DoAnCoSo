import { Route, Routes } from "react-router-dom";

import AdminLayout from "@/feature/AdminRoute/component/AdminLayout";

import CustomerRoute from "@admin/feature/CustomerRoute";
import OrderRoute from "@admin/feature/OrderRoute";
import TourRoute from "@admin/feature/TourRoute";

import DashboardPage from "./page/DashboardPage";
import StatisticPage from "./page/StatisticPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/statistic" element={<StatisticPage />} />

        <Route path="/tours/*" element={<TourRoute />} />
        <Route path="/orders/*" element={<OrderRoute />} />
        <Route path="/customers/*" element={<CustomerRoute />} />
      </Route>
    </Routes>
  )
}

export default AdminRoute