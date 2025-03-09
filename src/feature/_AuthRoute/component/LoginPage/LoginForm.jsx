import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ConfigProvider, Input } from "antd"
import antTheme from "./antTheme"
import { Link } from "react-router-dom"

function LoginForm() {
  return (
    <form className="flex flex-col gap-5 text-center">
      <div className="leading-8">
        <p className="text-3xl uppercase font-bold">Đăng nhập</p>
        <p>Nếu bạn chưa có tài khoản, <Link className="text-blue-400">đăng ký tại đây</Link> </p>
      </div>
      <Input size="large" placeholder="email" />
      <div className="text-left grid gap-1" >
        <Input size="large" placeholder="Mật khẩu" />
        <Link to="/" size="large" className="text-left text-blue-400">Quên mật khẩu</Link>
      </div>
      <Button size="large" className="flex px-5 py-2 border rounded-2xl items-center gap-5" >
        Đăng nhập bằng Email
      </Button>
    </form>
  )
}

export default LoginForm