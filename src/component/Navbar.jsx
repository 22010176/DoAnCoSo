import { Link } from "react-router-dom"
import { Popover } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faMagnifyingGlass, faRightLeft, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser, faUser } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"

function Navbar() {
  return (
    <nav className="flex justify-around gap-10 items-center h-20 bg-white">
      {/* Logo */}
      <img src="\assets\imgs\logo.jpg" alt="" className="h-full w-auto" />

      {/* Nav link */}
      <div className="flex gap-5 items-center text-lg">
        <Link className="bg-blue-100 text-blue-600 rounded-xl px-4 py-2">Trang chủ</Link>
        <Popover className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl"
          placement="bottomLeft"
          content={
            <div className="flex gap-2 flex-col pr-20 justify-start text-lg">
              <Link>Bảo hiểm Tour</Link>
              <Link>Visa</Link>
            </div>
          }>Giới thiệu<FontAwesomeIcon icon={faCaretDown} className="pl-2" /></Popover>
        <Popover className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl"
          placement="bottomLeft"
          content={
            <div className="flex gap-2 flex-col pr-20 justify-start text-lg">
              <Link>Tour trong nước</Link>
              <Link>Tour nước ngoài</Link>
            </div>
          }>Tour du lịch<FontAwesomeIcon icon={faCaretDown} className="pl-2" /></Popover>
        <Link className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl">Liên hệ</Link>
      </div>

      {/* icon */}
      <div className="flex gap-5 items-center text-blue-500">
        <Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faShoppingBag} size="2xl" />
        </Link>
        <Link className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPhone} size="2xl" />
          <div className="leading-4">
            <p className="text-gray-700">Hotline</p>
            <p className="font-bold text-blue-500">1900 6750</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar