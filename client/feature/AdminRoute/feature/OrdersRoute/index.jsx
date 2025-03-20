import { Route, Routes } from "react-router-dom";

import OrderDetailPage from "./page/OrderDetailPage";
import OrderPage from "./page/OrdersPage";

function OrderRoute() {
  return (
    <Routes >
      <Route index element={<OrderPage />} />
      <Route path="/:id" element={<OrderDetailPage />} />
    </Routes>
  );
}

export default OrderRoute 