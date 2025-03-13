import { Route, Routes } from "react-router-dom"

import CreateTourPage from "./CreateTourPage"
import ManageToursPage from "./ManageToursPage"
import TourDetailsPage from "./TourDetailsPage"
import UpdateTourPage from "./UpdateTourPage"

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