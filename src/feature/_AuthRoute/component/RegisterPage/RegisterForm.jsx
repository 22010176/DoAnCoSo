import { Button, Input } from "antd"
import axios from "axios"
import { Link } from "react-router-dom"
import API from "../../../../utils/api"

function RegisterForm() {
  function onSubmit(e) {
    e.preventDefault()
    API.post('/account/register')
      .then(function (response) {
        console.log(response.data)
      })
  }

  return (
    <>
      <div className="leading-8 text-center" >
        <p className="text-3xl uppercase font-bold">Đăng ký</p>
        <p>Đã có tài khoản, <Link className="text-blue-400">đăng nhập tại đây</Link> </p>
      </div>
      <form className="flex flex-col gap-2 text-center" onSubmit={onSubmit}>
        <Input size="large" placeholder="Họ" />
        <Input size="large" placeholder="Tên" />
        <Input size="large" placeholder="Email" />
        <Input size="large" placeholder="Số điện thoại" />
        <Input size="large" placeholder="Mật khẩu" />

        <Button htmlType="submit" size="large" className="flex px-5 py-2 border rounded-2xl items-center gap-5" >
          Đăng kí bằng Email
        </Button>
      </form>
    </>
  )
}
export default RegisterForm