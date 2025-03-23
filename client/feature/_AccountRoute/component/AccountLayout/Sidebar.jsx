import { List } from "antd";
import { faHouse, faLock, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const data = [
  { icon: faUserCircle, to: "/account", title: "Thông tin tài khoản" },
  // { icon: faHouse, to: "", title: "Địa chỉ" },
  { icon: faShoppingCart, to: "/account/orders", title: "Đơn hàng của bạn" },
  { icon: faLock, to: "/account/change-password", title: "Đổi mật khẩu" },
];

function SettingCategory({ item }) {
  return (
    <Link to={item.to} className="cursor-pointer grid grid-cols-[30px_1fr] gap-5 p-3 items-center group-hover:text-blue-500 group-hover:underline">
      <FontAwesomeIcon icon={item?.icon} className="text-xl w-8" />
      <p className="font-semibold text-nowrap">{item?.title}</p>
    </Link>
  )
}

function Sidebar() {
  return (
    <List bordered dataSource={data} className="h-min" renderItem={(item) => (
      <List.Item className="group">
        <SettingCategory item={item} />
      </List.Item>
    )} />
  )
}

export default Sidebar