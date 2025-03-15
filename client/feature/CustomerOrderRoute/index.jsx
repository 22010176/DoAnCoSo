import { Route, Routes } from "react-router-dom";

import HomeLayout from "@/component/HomeLayout";
import ProtectAccountRoute from "@/component/ProtectedPage/ProtectedAccountRoute";

import CheckoutPage from "./page/CheckoutPage";
import OrderPage from "./page/OrderPage";


function CustomerOrderRoute() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectAccountRoute>
          <HomeLayout />
        </ProtectAccountRoute>
      }>
        <Route index element={<OrderPage />} />
      </Route>

      <Route path="/checkout" element={
        <ProtectAccountRoute>
          <CheckoutPage />
        </ProtectAccountRoute>
      } />
    </Routes>
  )
}

export default CustomerOrderRoute