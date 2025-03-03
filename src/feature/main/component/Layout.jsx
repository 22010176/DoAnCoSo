import Footer from "./Footer";
import Navbar from "./Navbar";

const { Outlet } = require("react-router-dom");

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout