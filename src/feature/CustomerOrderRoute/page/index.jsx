import { Routes, Route } from "react-router-dom";

import HomeLayout from "../../../component/HomeLayout";

import CheckoutPage from "./CheckoutPage";
import CustomerOrder from "./CustomerOrder";


function CustomerOrderRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<CustomerOrder />} />
      </Route>

      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default CustomerOrderRoute