import { faCaretLeft, faMoneyCheckDollar, faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button, Collapse, Input, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import { Link } from "react-router-dom"

import UserCheckoutForm from "../component/CheckoutPage/UserCheckoutForm"
import OrderItems from "../component/CheckoutPage/OrderItems"


function CheckoutPage() {
  return (
    <div className="w-screen h-screen  grid xl:grid-cols-[2fr_1fr] bg-gray-50 overflow-x-hidden">
      <div className="p-15 flex flex-col gap-5">
        <p className="text-4xl font-bold text-blue-500 ">ND Travel</p>
        <OrderItems className="xl:hidden block" />
        <UserCheckoutForm />
      </div>

      <div className="bg-gray-100 p-5 flex flex-col h-full border-l-2 border-gray-200">
        <OrderItems className="xl:block hidden" />

        <div className="flex flex-col gap-2 text-lg border-b-2 border-gray-200 py-5">
          <div className="flex justify-between items-center">
            <p className="font-bold">Tạm tính</p>
            <p>20.000.000</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Phí vận chuyển</p>
            <p>_</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-lg border-b-2 border-gray-200 py-5">
          <div className="flex justify-between items-center text-2xl">
            <p className="text-gray-600">Tổng cộng</p>
            <p className="font-semibold text-blue-500">20.000.000</p>
          </div>
          <div className="flex justify-between items-center">
            <Link to=""><FontAwesomeIcon icon={faCaretLeft} /> Quay về giỏ hàng</Link>
            <Button variant="solid" color="blue" size="large" className="uppercase w-40">ĐẶT HÀNG</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CheckoutPage