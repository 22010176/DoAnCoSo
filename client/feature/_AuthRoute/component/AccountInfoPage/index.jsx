import { List } from "antd"
import { useSelector } from "react-redux"

import { getAccount } from "@/redux/authSlice"

import SettingCategoryItem from "./SettingCategoryItem"

function AccountInfoPage() {
  const customer = useSelector(getAccount)
  console.log(customer)

  const personalSettings = [
    { title: "Name", value: "" },
    { title: "Display name", value: "asdfasfdasfd" },
    { title: "Email address", value: "asdfasfdasfd" },
    { title: "Phone number", value: "asdfasfdasfd" },
    { title: "Date of birth", value: "asdfasfdasfd" },
    { title: "Nationality", value: "asdfasfdasfd" },
  ]

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="leading-10">
          <p className="text-3xl font-bold">Thông tin cá nhân</p>
          <p className="text-gray-500">Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
        </div>
        <div className="min-w-20">
          <img className="size-20 rounded-full" src="\assets\imgs\bg.jpg" alt="" />
        </div>
      </div>

      <List bordered dataSource={personalSettings}
        renderItem={item => (
          <List.Item className="group">
            <SettingCategoryItem item={item} />
          </List.Item>
        )} />
    </div>
  )
}

export default AccountInfoPage