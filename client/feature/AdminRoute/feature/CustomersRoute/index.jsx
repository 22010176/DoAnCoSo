import { Route, Routes } from "react-router-dom"
import CustomersPage from "./page/CustomersPage"
import CustomerDetailPage from "./page/CustomerDetailPage"

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<CustomersPage />} />
      <Route path="/:id" element={<CustomerDetailPage />} />
    </Routes>
  )
}

export default CustomerRoute