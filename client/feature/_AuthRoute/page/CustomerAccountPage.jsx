import { faHouse, faLock, faQuestionCircle, faShoppingCart, faStar, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumb, List } from "antd"
import { Link } from "react-router-dom"

import CustomerAvartar from "../component/CustomerAccountPage/Avartar"
import Container from "../component/CustomerAccountPage/Container"
import SettingCategory from "../component/CustomerAccountPage/SettingCategory"
import CustomerInfo from "../component/CustomerAccountPage/UserInfo"

const data = [
  { icon: faUserCircle, title: "Thông tin tài khoản" },
  { icon: faShoppingCart, title: "Đơn hàng của bạn" },
  { icon: faLock, title: "Đổi mật khẩu" },
  { icon: faHouse, title: "Địa chỉ" },
];

function CustomerAccountPage() {
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
        <List bordered dataSource={data} className="h-min lg:block hidden"
          renderItem={(item) => (
            <List.Item className="group">
              <SettingCategory item={item} />
            </List.Item>
          )} />

        <div className="flex flex-col gap-10">
          <CustomerInfo />
        </div>
      </Container>
    </div>
  )
}

export default CustomerAccountPage