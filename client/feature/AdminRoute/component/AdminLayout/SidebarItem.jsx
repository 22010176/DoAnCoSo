import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

function SidebarItem({ to, icon, text }) {
  const { pathname } = useLocation()

  // useEffect(function () {
  //   console.log(pathname)
  // }, [pathname])

  return (
    <Link to={to} className={[pathname === to ? "bg-green-800/40" : "", "rounded-xl hover:bg-gray-50/10 px-4 py-3 items-center grid md:grid-cols-[auto_1fr] gap-3 text-white"].join(' ')}>
      <FontAwesomeIcon icon={icon} className="text-2xl w-8" />
      <p className="md:block hidden text-nowrap font-semibold">{text}</p>
    </Link>
  )
}

export default SidebarItem