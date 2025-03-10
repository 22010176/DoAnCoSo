import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faLocationPin, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"

import Container from "../../../component/Container"
import Header from "../../../component/Header"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Giới thiệu</p>, }
]

function ContactPage() {
  return (
    <div className="mb-10 flex flex-col gap-10">
      <Header Element={Container} items={items} />

      <Container className="py-10 text-center flex flex-col gap-10 items-center">
        <div className="leading-14">
          <p className="text-4xl font-bold">Thông tin liên hệ</p>
          <p className="text-gray-500 text-lg">Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</p>
        </div>

        <div className="grid lg:grid-cols-3 ">
          <div className="p-10 flex flex-col gap-5 border-2 shadow border-gray-300 bg-gray-50 rounded-xl m-10">
            <FontAwesomeIcon icon={faLocationDot} size="5x" className="text-blue-500" />
            <p className="text-4xl font-bold">Địa chỉ</p>
            <p className="text-gray-500 text-lg">Tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội</p>
          </div>

          <div className="p-10 flex flex-col gap-5 border-2 shadow border-gray-300 bg-gray-50 rounded-xl m-10">
            <FontAwesomeIcon icon={faMailBulk} size="5x" className="text-blue-500" />
            <p className="text-4xl font-bold">Email</p>
            <p className="text-gray-500 text-lg">support@sapo.vn</p>
          </div>

          <div className="p-10 flex flex-col gap-5 border-2 shadow border-gray-300 bg-gray-50 rounded-xl m-10">
            <FontAwesomeIcon icon={faPhone} size="5x" className="text-blue-500" />
            <p className="text-4xl font-bold">Hotline</p>
            <p className="text-gray-500 text-lg">1900 6750</p>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-2 w-100">
          <Input size="large" placeholder="Họ và tên" />
          <Input size="large" placeholder="Email" />
          <Input size="large" placeholder="Điện thoại" required />
          <TextArea size="large" placeholder="Nội dung" />
          <Button className="w-50" color="blue" variant="solid">Gửi thông tin</Button>
        </form>
      </Container>
    </div>
  )
}

export default ContactPage