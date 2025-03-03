import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "./Logo"
import { faMagnifyingGlass, faCircleUser, faHeadset, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function NavItem({ className, children, active, ...props }) {
  return (
    <Link to="/" className={[className, active ? 'bg-cyan-500 text-white' : '', 'cursor-pointer px-8 py-2 rounded-2xl text-lg'].join(' ')} {...props}>
      {children}
    </Link>
  )
}

function Navbar({ }) {
  return (
    <nav className="sticky w-full h-20 py-3 flex justify-around items-center bg-white">
      <Logo />
      <div className="flex gap-2">
        <NavItem active>Trang chủ</NavItem>
        <NavItem>Địa điểm du lịch</NavItem>
        <NavItem>
          Tour trong nước
          <FontAwesomeIcon className="ps-1" icon={faAngleDown} />
        </NavItem>
        <NavItem>Tin tức</NavItem>
      </div>

      <div className="flex gap-3 items-center h-100">
        <FontAwesomeIcon className="opacity-50" icon={faMagnifyingGlass} size="2x" />
        <div className="h-10 rounded-full bg-gray-400" style={{ width: '2px' }}></div>
        <FontAwesomeIcon className="opacity-50" icon={faCircleUser} size="2x" />
        <div className="h-10 rounded-full bg-gray-400" style={{ width: '2px' }}></div>
        <FontAwesomeIcon className="opacity-50" icon={faHeadset} size="2x" />
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-5">Hotline</p>
          <p className="text-blue-400 font-medium leading-5">0333.333.xxx</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar