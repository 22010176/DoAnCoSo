import { Breadcrumb } from "antd"
import { Link, Outlet, useLocation } from "react-router-dom"

import CustomerAvartar from "./Avartar"
import Container from "./Container"
import Sidebar from "./Sidebar"

const info = [
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-lg">Tài khoản cá nhân</p>, }
]

const changePass = [
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/">Trang chủ</Link>, },
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/account">Tài khoản</Link>, },
  { title: <p className="text-white font-bold text-lg">Đổi mật khẩu</p>, }
]
const orderPass = [
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/">Trang chủ</Link>, },
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/account">Tài khoản</Link>, },
  { title: <p className="text-white font-bold text-lg">Đơn hàng</p>, }
]

function AccountInfoLayout() {
  const { pathname } = useLocation()
  console.log(pathname)


  return (
    <div className="overflow-x-hidden">
      <Container className="bg-green-800 flex flex-col gap-5 py-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-white">ChillTravel </p>

          <div className="flex gap-10 items-center text-white ">
            <CustomerAvartar />
          </div>
        </div>
        {pathname === '/account/change-password' && <Breadcrumb separator={<p className="text-white text-lg px-3">/</p>} items={changePass} />}
        {pathname === '/account' && <Breadcrumb separator={<p className="text-white text-lg px-3">/</p>} items={info} />}
        {pathname.includes('/account/orders') && <Breadcrumb separator={<p className="text-white text-lg px-3">/</p>} items={orderPass} />}
      </Container>

      <Container className="grid xl:grid-cols-[auto_1fr] p-10 gap-10 overflow-x-hidden" >
        <Sidebar />

        <Outlet />
      </Container>
    </div>
  )
}

export default AccountInfoLayout