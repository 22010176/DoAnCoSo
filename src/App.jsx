import { BrowserRouter, Route, Routes } from "react-router-dom"

import CustomerRoute from "./page/customerRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>


        {/* Customer */}
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App