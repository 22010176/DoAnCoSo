import { Button, Input, notification } from "antd"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { getUserInfo } from "@/redux/authSlice"

import { LoginUser } from "../../service/users"

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [api, contextHolder] = notification.useNotification({ stack: { threshold: 1 } })

  async function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (Object.values(data).some(i => i.length === 0))
      return api.error({ message: "Phải nhập email và mật khẩu!!" })

    const result = await LoginUser(data)
    if (!result.success) return api.error({ message: "Đăng nhập thất bại." })

    api.success({ message: "Đăng nhập thành công." })
    setTimeout(function () {
      dispatch(getUserInfo())
      navigate('/')
    }, 1500)
  }

  return (
    <>
      {contextHolder}
      <form className="flex flex-col gap-5 text-center" onSubmit={onSubmit}>
        <div className="leading-8">
          <p className="text-3xl uppercase font-bold">Đăng nhập</p>
          <p className="flex gap-1 justify-center">
            Nếu bạn chưa có tài khoản,
            <Link to="/auth/register" className="text-blue-400">đăng ký tại đây</Link>
          </p>
        </div>
        <Input name="email" size="large" placeholder="email" />
        <div className="text-left grid gap-1" >
          <Input name="password" type="password" size="large" placeholder="Mật khẩu" />
          <Link to="/" size="large" className="w-min text-nowrap text-left text-blue-400">Quên mật khẩu</Link>
        </div>
        <Button htmlType="submit" size="large" className="flex px-5 py-2 border rounded-2xl items-center gap-5" >
          Đăng nhập bằng Email
        </Button>
      </form>
    </>
  )
}

export default LoginForm