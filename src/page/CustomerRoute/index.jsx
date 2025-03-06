import { Route, Routes } from "react-router-dom";

import HomeLayout from "../../layout/HomeLayout";
import HomePage from "./HomePage";
import IntroPage from "./IntroPage";
import TourPage from "./TourPage";
import ContactPage from "./ContactPage";
import CustomerOrder from "./CustomerOrder";
import CheckoutPage from "./CheckoutPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/info" element={<IntroPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<CustomerOrder />} />
      </Route>

      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default CustomerRoute