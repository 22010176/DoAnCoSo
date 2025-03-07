import { Route, Routes } from "react-router-dom"

import HomeLayout from "../../../component/HomeLayout"

import TourPage from "./TourPage"
import TourInfoPage from "./TourInfoPage"

function CustomerTourRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<TourPage />} />
        <Route path="/:id" element={<TourInfoPage />} /></Route>
    </Routes>
  )
}

export default CustomerTourRoute