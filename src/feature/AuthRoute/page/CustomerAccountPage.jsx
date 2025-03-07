import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faMoneyCheck, faQuestionCircle, faSliders, faStar, faUserCircle, faUserGroup, faUserShield } from "@fortawesome/free-solid-svg-icons"
import { Avatar, Breadcrumb, Button, List } from "antd"
import { Link } from "react-router-dom"

import Container from "../component/CustomerAccountPage/Container"
import CustomerAvartar from "../component/CustomerAccountPage/Avartar"
import SettingCategoryItem from "../component/CustomerAccountPage/SettingCategoryItem"
import SettingCategory from "../component/CustomerAccountPage/SettingCategory"

const items = [
  { title: <Link style={{ color: "white" }} className="text-lg font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-lg">Thông tin cá nhân</p>, }
]
const data = [
  { icon: faUserCircle, title: "Personal details" },
  { icon: faLock, title: "Security settings" },
  { icon: faUserGroup, title: "Other travelers" },
  { icon: faSliders, title: "Customization preferences" },
  { icon: faMoneyCheck, title: "Payment methods" },
  { icon: faUserShield, title: "Privacy and data management" },
];

const personalSettings = [
  { title: "Name", value: "asdfasfdasfda" },
  { title: "Display name", value: "asdfasfdasfd" },
  { title: "Email address", value: "asdfasfdasfd" },
  { title: "Phone number", value: "asdfasfdasfd" },
  { title: "Date of birth", value: "asdfasfdasfd" },
  { title: "Nationality", value: "asdfasfdasfd" },
]

function CustomerAccountPage() {
  return (
    <div className="overflow-x-hidden">
      <Container className="bg-blue-800 flex flex-col gap-5 py-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-white">ChillTravel </p>

          <div className="flex gap-10 items-center text-white ">
            <Link className="lg:flex hidden size-8 rounded-full bg-red-500 justify-center items-center text-yellow-400">
              <FontAwesomeIcon icon={faStar} size="1x" />
            </Link>
            <Link className="lg:flex hidden">
              <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
            </Link>
            <CustomerAvartar />
          </div>
        </div>
        <Breadcrumb items={items} separator={<p className="text-white text-lg px-3">/</p>} />
      </Container>

      <Container className="grid lg:grid-cols-[auto_1fr] p-10 gap-10 overflow-x-hidden" >
        <List bordered dataSource={data} className="h-min lg:block hidden"
          renderItem={(item) => <List.Item className="group"><SettingCategory item={item} /></List.Item>} />
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="leading-10">
              <p className="text-4xl font-bold">Personal details</p>
              <p className="text-gray-500">Update your info and find out how it's used.</p>
            </div>
            <div className="min-w-20">
              <label htmlFor="avarta">
                <img className="size-20 rounded-full" src="\assets\imgs\bg.jpg" alt="" />
              </label>
              <input className="hidden" type="file" id="avarta" />
            </div>
          </div>

          <List bordered dataSource={personalSettings}
            renderItem={item => <List.Item className="group"><SettingCategoryItem item={item} /></List.Item>} />
        </div>
      </Container>
    </div>
  )
}

export default CustomerAccountPage