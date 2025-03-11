import { Link } from "react-router-dom"

import Container from "@/component/Container"
import Header from "@/component/Header"

import GoogleLoginButton from "../component/LoginPage/GoogleLoginButton"
import LoginForm from "../component/LoginPage/LoginForm"
import LoginType from "../component/LoginPage/LoginType"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Đăng nhập</p>, }
]

function LoginPage() {

  return (
    <div className="w-full mb-10">
      <Header Element={Container} items={items} />

      <Container className="p-10 flex flex-col gap-5 items-center">
        <LoginType />

        <div className="grid gap-2 md:w-3/7 w-80 ">
          <LoginForm />
          <GoogleLoginButton />
        </div>
      </Container>
    </div>
  )
}

export default LoginPage