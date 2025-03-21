import { List } from "antd";
import { faHouse, faLock, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import SettingCategory from "./SettingCategory";

const data = [
  { icon: faUserCircle, to: "", title: "Thông tin tài khoản" },
  { icon: faHouse, to: "", title: "Địa chỉ" },
  { icon: faShoppingCart, to: "", title: "Đơn hàng của bạn" },
  { icon: faLock, to: "", title: "Đổi mật khẩu" },
];

function Sidebar() {
  return (
    <List bordered dataSource={data} className="h-min lg:block hidden" renderItem={(item) => (
      <List.Item className="group">
        <SettingCategory item={item} />
      </List.Item>
    )} />
  )
}

export default Sidebar