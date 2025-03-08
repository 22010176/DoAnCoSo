import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMailBulk, faMailForward, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { Button } from "antd"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"

import Container from "../../../component/Container"
import Header from "../../../component/Header"
import { jwtDecode } from "jwt-decode"
import GoogleLoginButton from "../component/Login/GoogleLoginButton"
import LoginButton from "../component/Login/LoginButton"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Đăng nhập</p>, }
]


function LoginPage() {

  return (
    <div className="w-full mb-10">
      <Header Element={Container} items={items} />

      <Container className="p-10 flex flex-col gap-5 items-center">
        <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-10">
          <div className="flex flex-col gap-5 text-center">
            <div className="size-40 flex justify-center items-center border-5 border-green-500 rounded-xl text-green-500">
              <FontAwesomeIcon icon={faUserCircle} size="6x" />
            </div>
            <p className="text-2xl font-bold uppercase">USER</p>
          </div>
          <div className="flex flex-col gap-5 text-center">
            <div className="size-40 flex justify-center items-center border-5 border-green-500 rounded-xl text-green-500">
              <FontAwesomeIcon icon={faUserCircle} size="6x" />
            </div>
            <p className="text-2xl font-bold uppercase">admin</p>
          </div>
        </div>
        <p className="font-bold text-green-600 text-xl text-center">Chào mừng đến với ChillTravel!!</p>
        <div className="grid gap-3">
          <GoogleLoginButton />
          <LoginButton />
        </div>
      </Container>
    </div>
  )
}

export default LoginPage