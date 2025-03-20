import { faCaretDown, faCircleUser, faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons/faList"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Drawer, Dropdown } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

import { getAccount, logOutUser } from "@/redux/authSlice"


function LogoutButton() {
  const dispatch = useDispatch()
  function onClick(e) { dispatch(logOutUser()) }

  return <button className="pr-5" onClick={onClick}>Đăng xuất</button>
}

const guessAccount = [
  { key: '1', label: <Link className="pr-5" to="/auth/login">Đăng nhập</Link> },
  { key: '2', label: <Link className="pr-5" to="/auth/register">Đăng kí</Link> },
]

const adminAccount = [
  { key: '1', label: <Link className="pr-5" to="/account">Tài khoản</Link> },
  { key: '2', label: <Link className="pr-5" to="/orders">Giỏ hàng</Link> },
  { key: '3', label: <Link className="pr-5" to="/">Tour yêu thích</Link> },
  { key: '4', label: <Link className="pr-5" to="/dashboard">Quản lý</Link> },
  { key: '5', label: <LogoutButton /> },
]
const authorizeAccount = [
  { key: '1', label: <Link className="pr-5" to="/account">Tài khoản</Link> },
  { key: '2', label: <Link className="pr-5" to="/orders">Giỏ hàng</Link> },
  { key: '3', label: <Link className="pr-5" to="/">Tour yêu thích</Link> },
  { key: '4', label: <LogoutButton /> },
]

function AccountIcon({ }) {
  const account = useSelector(getAccount)
  const items = account == null || account === "pending..." ? guessAccount : account.vaiTro === '1' ? adminAccount : authorizeAccount

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Link to={account == null ? "/auth/login" : "/account"}><FontAwesomeIcon icon={faCircleUser} size="2xl" /></Link>
    </Dropdown>
  )
}

const tourItems = [
  { key: 1, label: <Link className="pr-10">Tour trong nước</Link> },
  { key: 2, label: <Link className="pr-10">Tour nước ngoài</Link> },
]

const activeLink = "bg-blue-100 text-blue-600"
const paths = ['/', '/info', '/tours', '/contact'].sort((a, b) => b.length - a.length)
function NavLinks() {
  const location = useLocation()
  const [path, setPath] = useState()

  useEffect(function () {
    const pathname = location.pathname
    setPath(paths.filter(p => pathname.includes(p))[0])
  }, [location])

  return (
    <>
      <Link to="/" className={[path === '/' && activeLink, "hover:bg-blue-100 hover:text-blue-600 rounded-xl px-4 py-2"].join(' ')}>Trang chủ</Link>
      <Link to="/info" className={[path === '/info' && activeLink, "hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl"].join(' ')}>Giới thiệu</Link>

      <Dropdown menu={{ items: tourItems }} className={[path === '/tours' && activeLink, "lg:block hidden hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl"]} placement="bottomLeft">
        <Link to="/tours">Tour du lịch<FontAwesomeIcon icon={faCaretDown} className="pl-2" /></Link>
      </Dropdown>
      <Link to="/tours" className={[path === '/tours' && activeLink, "px-4 py-2 lg:hidden block"].join(' ')}>Tour du lịch</Link>

      <Link to="/contact" className={[path === '/contact' && activeLink, "hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-xl"].join(' ')}>Liên hệ</Link>
    </>
  )
}

function Navbar({ }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="lg:justify-around lg:px-0 px-5 justify-between flex gap-10 items-center h-20 bg-white">
      {/* Logo */}
      <img src="\assets\imgs\logo.jpg" alt="" className="h-full w-auto" />

      {/* Nav link */}
      <div className="hidden lg:flex gap-5 items-center text-lg">
        <NavLinks />
      </div>

      {/* icon */}
      <div className="flex gap-5 items-center text-blue-500">
        <Link><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" /></Link>

        <AccountIcon />

        <Link to="/orders"><FontAwesomeIcon icon={faShoppingBag} size="2xl" /></Link>
        <Link className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPhone} size="2xl" />
          <div className="leading-4 lg:block hidden">
            <p className="text-gray-700">Hotline</p>
            <p className="font-bold text-blue-500">1900 6750</p>
          </div>
        </Link>

        <Link className="lg:hidden block">
          <Button size="large" variant="link" color="blue"><FontAwesomeIcon icon={faList} size="2x" onClick={e => setOpen(true)} /></Button>
        </Link>
      </div>

      {/* responsive */}
      <Drawer className="lg:block hidden" placement="left" closable open={open} onClose={e => setOpen(false)}>
        <div className="flex flex-col gap-2 text-lg">
          <NavLinks />
        </div>
      </Drawer>
    </nav>
  )
}

export default Navbar