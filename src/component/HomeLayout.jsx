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

      {/* Theo dõi và cập nhật tin tức mới nhất */}
      <Contact />

      <Footer />
    </div>
  )
}

export default HomeLayout