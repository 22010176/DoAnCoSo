import { faLock, faMoneyCheck, faQuestionCircle, faSliders, faStar, faUserCircle, faUserGroup, faUserShield } from "@fortawesome/free-solid-svg-icons"

import SettingCategory from "./SettingCategory"
import { List } from "antd";

const data = [
  { icon: faUserCircle, title: "Personal details" },
  { icon: faLock, title: "Security settings" },
  { icon: faUserGroup, title: "Other travelers" },
  { icon: faSliders, title: "Customization preferences" },
  { icon: faMoneyCheck, title: "Payment methods" },
  { icon: faUserShield, title: "Privacy and data management" },
];

function SettingCategories({ data }) {
  return (
    <List bordered dataSource={data} className="h-min lg:block hidden"
      renderItem={(item) => (
        <List.Item className="group">
          <SettingCategory item={item} />
        </List.Item>
      )}
    />
  )
}

export default SettingCategories