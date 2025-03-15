import { Route, Routes } from "react-router-dom";

import AdminLayout from "@admin/component/AdminLayout";
import OrderDetailPage from "./page/OrderDetailPage";

function OrderRoute() {
  return (
    <Routes >
      <Route index />
      <Route path="/:id" element={<OrderDetailPage />} />
    </Routes>
  );
}

export default OrderRoute