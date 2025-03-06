import { BrowserRouter, Route, Routes } from "react-router-dom"

import CustomerRoute from "./page/customerRoute"
import AuthRoute from "./page/AuthRoute"
import { useEffect } from "react"
import axios from "axios"

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