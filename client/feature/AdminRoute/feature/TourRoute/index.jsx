import { Route, Routes } from "react-router-dom"

import CreateTourPage from "./page/CreateTourPage"
import ManageToursPage from "./page/ManageToursPage"
import TourDetailsPage from "./page/TourDetailsPage"

function AdminTourRoute() {
  return (
    <Routes>
      <Route index element={<ManageToursPage />} />
      <Route path="/create" element={<CreateTourPage />} />
      <Route path="/details/:tourId" element={<TourDetailsPage />} />
    </Routes>
  )
}

export default AdminTourRoute