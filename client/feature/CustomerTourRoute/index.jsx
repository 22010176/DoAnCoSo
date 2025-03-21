import { Route, Routes } from "react-router-dom"

import HomeLayout from "@/component/HomeLayout"

import TourInfoPage from "./page/TourInfoPage"
import TourPage from "./page/TourPage"
import FavouriteTourPage from "./page/FavouriteTourPage"

// /tours/*
function CustomerTourRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<TourPage />} />
        <Route path="/favourite" element={<FavouriteTourPage />} />
        <Route path="/:id" element={<TourInfoPage />} />
      </Route>
    </Routes>
  )
}

export default CustomerTourRoute