
import { useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthRoute from "./route/AuthRoute"
import CustomerRoute from "./route/customerRoute"

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
        <Route path="/auth/*" element={<AuthRoute />} />

        {/* Customer */}
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App