import { Breadcrumb } from "antd"
import { Link, Outlet } from "react-router-dom"

import CustomerAvartar from "./Avartar"
import Container from "./Container"
import Sidebar from "./Sidebar"

function AccountInfoLayout() {
  return (
    <div className="overflow-x-hidden">
      <Container className="bg-blue-800 flex flex-col gap-5 py-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-white">ChillTravel </p>

          <div className="flex gap-10 items-center text-white ">
            <CustomerAvartar />
          </div>
        </div>
        <Breadcrumb separator={<p className="text-white text-lg px-3">/</p>} items={[
          { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/">Trang chủ</Link>, },
          { title: <p className="text-white font-bold text-lg">Tài khoản cá nhân</p>, }
        ]} />
      </Container>

      <Container className="grid lg:grid-cols-[auto_1fr] p-10 gap-10 overflow-x-hidden" >
        <Sidebar />

        <Outlet />
      </Container>
    </div>
  )
}

export default AccountInfoLayout