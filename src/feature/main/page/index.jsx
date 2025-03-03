import { Route, Routes } from "react-router-dom"

import Layout from "../component/Layout"
import MainPage from "./MainPage"

import TourDetail from "./TourDetail"

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/tour/:id" element={<TourDetail />} />


      </Route>
    </Routes>
  )
}

export default MainRoute