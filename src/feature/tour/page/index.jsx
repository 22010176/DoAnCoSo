import { Route, Routes } from "react-router-dom"

import Layout from "../component/Layout"
import TourDetail from "../../main/page/TourDetail"

function TourRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/detail/:id" element={<TourDetail />} /> */}
      </Route>
    </Routes>
  )
}

export default TourRoute