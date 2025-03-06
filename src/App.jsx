import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./page/HomePage"
import HomeLayout from "./layout/HomeLayout"
import IntroPage from "./page/IntroPage"
import TourPage from "./page/TourPage"
import ContactPage from "./page/ContactPage"
import CustomerOrder from "./page/CustomerOrder"
import CheckoutPage from "./page/CheckoutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/info" element={<IntroPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<CustomerOrder />} />
        </Route>

        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App