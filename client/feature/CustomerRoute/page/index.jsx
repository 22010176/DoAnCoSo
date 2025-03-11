import { Route, Routes } from "react-router-dom";

import HomeLayout from '@/component/HomeLayout/HomeLayout';

import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import IntroPage from "./IntroPage";

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