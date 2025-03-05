import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./page/HomePage"
import HomeLayout from "./layout/HomeLayout"
import IntroPage from "./page/IntroPage"
import TourPage from "./page/TourPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/info" element={<IntroPage />} />
          <Route path="/tour" element={<TourPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App