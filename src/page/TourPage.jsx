import { Link } from "react-router-dom"
import Container from "../component/ui/Container"
import Header from "../component/ui/Header"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Tất cả sản phẩm</p>, }
]


function TourPage() {
  return (
    <div className="mt-10 mb-20">
      <Container className="relative w-full flex items-center h-20 my-10">
        <Header items={items} />
      </Container>

      <Container className="grid grid-cols-[1fr_4fr] gap-10">
        <div className="border border-gray-500 rounded-2xl">
          a
        </div>
        <div className="border-gray-500 rounded-2xl">
          a
        </div>
      </Container>
    </div>
  )
}

export default TourPage