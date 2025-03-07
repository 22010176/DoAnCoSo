import { Route, Routes } from "react-router-dom";

import HomeLayout from "../component/HomeLayout";

import HomePage from "../feature/CustomerRoute/page/HomePage";
import IntroPage from "../feature/CustomerRoute/page/IntroPage";
import TourPage from "../feature/CustomerRoute/page/TourPage";
import ContactPage from "../feature/CustomerRoute/page/ContactPage";
import CustomerOrder from "../feature/CustomerRoute/page/CustomerOrder";
import CheckoutPage from "../feature/CustomerRoute/page/CheckoutPage";
import TourInfoPage from "../feature/CustomerRoute/page/TourInfoPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/info" element={<IntroPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/tour/:id" element={<TourInfoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<CustomerOrder />} />
      </Route>

      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default CustomerRoute