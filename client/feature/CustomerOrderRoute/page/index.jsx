import { Routes, Route } from "react-router-dom";

import HomeLayout from "component/HomeLayout/HomeLayout";

import CheckoutPage from "./CheckoutPage";
import OrderPage from "./OrderPage";
import ProtectAccountRoute from "@/component/ProtectedPage/ProtectedAccountRoute";


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