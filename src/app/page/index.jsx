import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App