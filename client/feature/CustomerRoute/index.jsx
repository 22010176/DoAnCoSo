import { Route, Routes } from "react-router-dom";

import HomeLayout from '@/component/HomeLayout';

import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
import IntroPage from "./page/IntroPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/info" element={<IntroPage />} />
      </Route>
    </Routes>
  )
}

export default CustomerRoute