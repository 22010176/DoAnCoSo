import { Button, List } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { getAccount, logOutUser } from "@/redux/authSlice"

import SettingCategoryItem from "../component/AccountInfoPage/SettingCategoryItem"

function InfoPage() {
  const dispatch = useDispatch()
  const customer = useSelector(getAccount)

  const personalSettings = [
    { title: "Họ và tên", value: [customer?.ho, customer?.ten].join(' ') },
    { title: "Email", value: customer?.email },
    { title: "Số điện thoại", value: customer?.soDienThoai },
    { title: "Ngày tạo", value: new Date(customer?.created_at).toLocaleString() },
    { title: "Loại tài khoản", value: customer?.tenVaiTro },
  ]

  function onLogOut() {
    dispatch(logOutUser())
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">Thông tin cá nhân</p>
          <p className="text-gray-500">Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
        </div>
        <img className="size-20 rounded-full" src="\assets\imgs\bg.jpg" alt="" />

      </div>

      <List bordered dataSource={personalSettings}
        renderItem={item => (
          <List.Item className="group">
            <SettingCategoryItem item={item} />
          </List.Item>
        )} />
      <Button onClick={onLogOut} size="large" color="red" variant="solid" className="w-25">Đăng suất</Button>
    </div>
  )
}

export default InfoPage