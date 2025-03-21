import { Link } from "react-router-dom"

import Header from "@/component/Header"

import Container from '../component/CustomerOrder/Container'
import ItemTable from "../component/CustomerOrder/ItemTable"
import ReceiveSetting from "../component/CustomerOrder/ReceiveSetting"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Giỏ hàng</p>, }
]

function OrderPage() {
  function onSubmit(e) { }

  return (
    <div className="mb-10">
      <Header Element={Container} items={items} />

      <Container Element="form" className="grid xl:grid-cols-[1fr_auto] gap-5 my-5" onSubmit={onSubmit}>
        <p className="text-2xl font-bold xl:col-span-2">Giỏ hàng của bạn</p>

        <ReceiveSetting />

        <ItemTable />
      </Container>
    </div>
  )
}

export default OrderPage