import { Button, Input, notification } from "antd"
import { Link, useNavigate } from "react-router-dom"

import { RegisterUser } from "../../service/users"


function RegisterForm() {
  const [api, contextHolder] = notification.useNotification({ stack: { threshold: 1 } })
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    const result = await RegisterUser(formData)
    if (!result.success)
      return api.error({ message: "Tạo tài khoản thất bại." })

    api.success({ message: "Tạo tài khoản thành công." })
    setTimeout(function () { navigate('/account/login') }, 1500)
  }

  return (
    <>
      {contextHolder}
      <div className="leading-8 text-center" >
        <p className="text-3xl uppercase font-bold">Đăng ký</p>
        <p>Đã có tài khoản, <Link className="text-blue-400">đăng nhập tại đây</Link> </p>
      </div>
      <form className="flex flex-col gap-2 text-center" onSubmit={onSubmit}>
        <Input name="ho" size="large" placeholder="Họ" />
        <Input name="ten" size="large" placeholder="Tên" />
        <Input name="email" size="large" placeholder="Email" />
        <Input type="tel" name="soDienThoai" size="large" placeholder="Số điện thoại" />
        <Input type="password" name="matKhau" size="large" placeholder="Mật khẩu" />

        <Button htmlType="submit" size="large" className="flex px-5 py-2 border rounded-2xl items-center gap-5" >
          Đăng kí bằng Email
        </Button>
      </form>
    </>
  )
}
export default RegisterForm