import { Link, useParams } from "react-router-dom"

import Header from "@/component/Header"

import Container from "../component/TourInfoPage/Container"
import OrderForm from "../component/TourInfoPage/OrderForm"
import TourDetail from "../component/TourInfoPage/TourDetail"
import TourInfoHeader from "../component/TourInfoPage/TourInfoHeader"
import TourList from "../component/TourInfoPage/TourList"

const items = [
  { title: <Link to="/" style={{ color: "white" }} className="text-xl font-semibold" >Trang chủ</Link>, },
  { title: <Link to="/tours" style={{ color: "white" }} className="text-white font-semibold text-xl">Sản phẩm</Link>, },
]

const tabItem = [
  { key: '1', label: <p className="font-bold">Mô tả</p>, children: <div className="h-50 p-3 rounded-b-xl">Mô tả</div>, },
  { key: '2', label: <p className="font-bold">Lịch trình</p>, children: <div className="h-50 p-3 rounded-b-xl">Lịch trình</div>, },
  { key: '3', label: <p className="font-bold">Vị trí</p>, children: <div className="h-50 p-3 rounded-b-xl">Vị trí</div>, },
  { key: '4', label: <p className="font-bold">Đánh giá tour</p>, children: <div className="h-50 p-3 rounded-b-xl">Đánh giá tour</div>, },
]

function TourInfoPage() {
  const { id } = useParams()


  console.log(id)
  return (
    <div className="mb-10 flex flex-col gap-5">
      <Header Element={Container} items={items.concat({ title: <p className="text-white font-bold text-xl">{id.id}</p> })} />

      <Container>
        <TourInfoHeader />
      </Container>

      <Container className="relative grid 2xl:grid-cols-[2.2fr_1fr] xl:grid-cols-[2fr-1fr] lg:grid-cols-[1.5fr_1fr] gap-10">
        <TourDetail items={tabItem} />

        <OrderForm />
      </Container>

      <Container className="flex flex-col gap-5">
        <TourList />
      </Container>
    </div>
  )
}

export default TourInfoPage