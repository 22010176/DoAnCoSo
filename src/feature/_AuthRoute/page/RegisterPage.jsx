import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMailBulk, faMailForward, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { Button, Input } from "antd"

import Container from "../../../component/Container"
import Header from "../../../component/Header"

import RegisterForm from "../component/RegisterPage/RegisterForm"
import GoogleLoginButton from "../component/LoginPage/GoogleLoginButton"

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
      </Container>
    </div>
  )
}

export default RegisterPage