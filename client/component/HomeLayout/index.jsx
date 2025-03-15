import { Outlet } from "react-router-dom"

import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"

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