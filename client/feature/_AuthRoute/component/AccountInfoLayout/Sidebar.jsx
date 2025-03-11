import { List } from "antd";
import { faHouse, faLock, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import SettingCategory from "./SettingCategory";

const data = [
  { icon: faUserCircle, title: "Thông tin tài khoản" },
  { icon: faShoppingCart, title: "Đơn hàng của bạn" },
  { icon: faLock, title: "Đổi mật khẩu" },
  { icon: faHouse, title: "Địa chỉ" },
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