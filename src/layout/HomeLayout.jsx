import { Outlet } from "react-router-dom"
import Navbar from "../component/ui/Navbar"
import Footer from "../component/ui/Footer"
import Contact from "../component/ui/Contact"

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