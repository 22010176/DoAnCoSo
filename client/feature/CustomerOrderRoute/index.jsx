import { Route, Routes } from "react-router-dom";

import HomeLayout from "@/component/HomeLayout";

import CheckoutPage from "./page/CheckoutPage";
import OrderPage from "./page/OrderPage";


function CustomerOrderRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<OrderPage />} />
      </Route>

      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default CustomerOrderRoute