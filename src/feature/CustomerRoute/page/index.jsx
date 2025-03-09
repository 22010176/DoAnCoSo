import { Route, Routes } from "react-router-dom";

import HomeLayout from '../../../component/HomeLayout/HomeLayout'

import HomePage from "./HomePage";
import IntroPage from "./IntroPage";
import TourPage from "../../CustomerTourRoute/page/TourPage";
import ContactPage from "./ContactPage";
import TourInfoPage from "../../CustomerTourRoute/page/TourInfoPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/info" element={<IntroPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default CustomerRoute