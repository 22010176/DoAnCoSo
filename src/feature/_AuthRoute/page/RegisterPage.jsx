import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMailBulk, faMailForward, faUserCircle } from "@fortawesome/free-solid-svg-icons"

import Container from "../../../component/Container"
import Header from "../../../component/Header"

import RegisterForm from "../component/register/RegisterForm"
import { Button, Input } from "antd"
import GoogleLoginButton from "../component/Login/GoogleLoginButton"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Đăng kí</p>, }
]

function RegisterPage() {

  return (
    <div className="w-full mb-10">
      <Header Element={Container} items={items} />

      <Container className="p-10 flex flex-col gap-5 items-center">
        <div className="md:w-3/7 w-80 text-center gap-3 flex flex-col">
          <RegisterForm />
          <p>Hoặc đăng nhập bằng</p>
          <GoogleLoginButton />
        </div>

        {/* <div className="leading-8 text-center" >
          <p className="text-3xl uppercase font-bold">Đăng ký</p>
          <p>Đã có tài khoản, <Link className="text-blue-400">đăng nhập tại đây</Link> </p>
        </div>
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
        </form> */}
      </Container>
    </div>
  )
}

export default RegisterPage