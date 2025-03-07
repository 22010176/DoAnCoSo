import { useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import _AuthRoute from './feature/_AuthRoute/page'
import CustomerRoute from "./feature/CustomerRoute/page"
import AdminRoute from "./feature/AdminRoute/page"
import CustomerOrderRoute from "./feature/CustomerOrderRoute/page"
import CustomerTourRoute from "./feature/CustomerTourRoute/page"

function App() {
  useEffect(function () {
    axios.get('/api/')
      .then(function (response) {
        console.log(response.data)
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account/*" element={<_AuthRoute />} />

        <Route path="/dashboard/*" element={<AdminRoute />} />

        <Route path="/orders/*" element={<CustomerOrderRoute />} />

        <Route path="/tours/*" element={<CustomerTourRoute />} />

        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 