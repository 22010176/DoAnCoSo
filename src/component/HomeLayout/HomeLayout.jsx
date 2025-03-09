import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "./Contact"

function HomeLayout() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* navbar */}
      <Navbar />

      {/* Content */}
      <Outlet />

      <Contact />

      <Footer />
    </div>
  )
}

export default HomeLayout