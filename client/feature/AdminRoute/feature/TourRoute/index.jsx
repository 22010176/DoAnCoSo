import { Route, Routes } from "react-router-dom"

import CreateTourPage from "./page/CreateTourPage"
import ManageToursPage from "./page/ManageToursPage"
import TourDetailsPage from "./page/TourDetailsPage"
import UpdateTourPage from "./page/UpdateTourPage"

function AdminTourRoute() {
  return (
    <Routes>
      <Route index element={<ManageToursPage />} />
      <Route path="/create" element={<CreateTourPage />} />
      <Route path="/details/:tourId" element={<TourDetailsPage />} />
      <Route path="/update/:tourId" element={<UpdateTourPage />} />
    </Routes>
  )
}

export default AdminTourRoute