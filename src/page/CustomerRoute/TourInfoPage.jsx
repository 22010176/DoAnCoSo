import { href, Link, useParams } from "react-router-dom"
import { Button, DatePicker, Input, Rate, Tabs } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faHeart, faLocationDot, faPlane, faPlaneDeparture, faUser } from "@fortawesome/free-solid-svg-icons"


import Header from "../../component/ui/Header"
import Container from "../../component/TourInfoPage/Container"
import TourInfoVertical from "../../component/TourInfo/TourVertical"

const items = [
  { title: <Link to="/" style={{ color: "white" }} className="text-xl font-semibold" >Trang chủ</Link>, },
  { title: <Link to="/tour" style={{ color: "white" }} className="text-white font-semibold text-xl">Sản phẩm</Link>, },
]

const tabItem = [
  { key: '1', label: <p className="text-lg">Mô tả</p>, children: <div className="h-50 p-3 rounded-b-xl">Mô tả</div>, },
  { key: '2', label: <p className="text-lg">Lịch trình</p>, children: <div className="h-50 p-3 rounded-b-xl">Lịch trình</div>, },
  { key: '3', label: <p className="text-lg">Vị trí</p>, children: <div className="h-50 p-3 rounded-b-xl">Vị trí</div>, },
  { key: '4', label: <p className="text-lg">Đánh giá tour</p>, children: <div className="h-50 p-3 rounded-b-xl">Đánh giá tour</div>, },
]
function TourInfoPage() {
  const id = useParams()
  return (
    <div className="mb-10 flex flex-col gap-5">
      <Container className="relative w-full flex items-center h-20">
        <Header items={items.concat({ title: <p className="text-white font-bold text-xl">{id.id}</p> })} />
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-3xl">Du lịch Nha Trang - VinWonders Nha Trang - Hòn Mun 3N2Đ</p>
          <Rate value={4.5} allowHalf disabled />
          <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 flex flex-col lg:gap-8 gap-3">
            <div className="flex gap-2 items-center">
              <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
                <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-600">Khởi hành từ</p>
                <p className="text-blue-600">Hà Nội</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
                <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-600">Điểm đến</p>
                <p className="text-blue-600">Nha Trang</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
                <FontAwesomeIcon icon={faCalendar} className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-600">Thời gian</p>
                <p className="text-blue-600">3N2Đ</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-600">Số chỗ còn nhận</p>
                <p className="text-blue-600">Còn chỗ</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
                <FontAwesomeIcon icon={faPlane} className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-600">Di chuyển bằng</p>
                <p className="text-blue-600">Máy bay</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative grid 2xl:grid-cols-[2.2fr_1fr] xl:grid-cols-[2fr-1fr] lg:grid-cols-[1.5fr_1fr] gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="relative w-full">
              <img className="rounded-xl w-full" src="https://bizweb.dktcdn.net/100/505/645/products/sp2-2-c0d19e8d-52ad-4dad-a83c-486789e756b7.jpg?v=1703428506507" alt="" />
              <div className="absolute right-2 bottom-2 bg-black/50 size-12 rounded-2xl text-white flex justify-center items-center"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
            <div className="grid grid-cols-5 gap-5">
              <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-04d95c8f-9688-4cbc-a200-dbfa6a9c5e12.jpg?v=1703428504240" alt="" /></div>
              <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-5-1d784c9b-172a-4d70-992b-1f25ba0b0c56.jpg?v=1703428505093" alt="" /></div>
              <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
              <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
              <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
            </div>
          </div>
          <Tabs className="shadow-xl rounded-b-xl" type="card" defaultActiveKey="1" items={tabItem} />
        </div>

        <form className="bg-blue-100 rounded-xl h-min p-5 flex flex-col gap-4 sticky top-5">
          <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
            <p className="text-4xl text-blue-500 font-semibold ">6.500.000₫</p>
            <p><strong>Mã tour:</strong> ND025</p>
          </div>

          <div className="flex gap-5 border-b border-gray-300 pb-3">
            <p className="font-bold">Mã giảm giá</p>
          </div>

          <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
            <div className="flex gap-3">
              <Button size="large" variant="solid" color="blue"><FontAwesomeIcon icon={faCalendar} /></Button>
              <DatePicker size="large" className="grow" placeholder="Chọn ngày đi" />
            </div>
            <div>
              <p className="font-bold mb-3">Loại khách</p>
              <div className="grid grid-cols-[1fr_1fr_auto] gap-5">
                <p className="text-nowrap">Người lớn</p>
                <Input type="number" />
                <p className="font-bold text-blue-500 2xl:text-lg">6.500.000₫</p>

                <p className="text-nowrap">Trẻ em</p>
                <Input type="number" />
                <p className="font-bold text-blue-500 2xl:text-lg">6.500.000₫</p>

                <p className="text-nowrap">Em bé</p>
                <Input type="number" />
                <p className="font-bold text-blue-500 2xl:text-lg">6.500.000₫</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <p>Tổng tiền</p>
              <p className="text-2xl font-bold text-blue-500">6.500.000₫</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Button size="large" variant="solid" color="blue">Đặt ngay</Button>
              <Button size="large" variant="outlined" color="blue">Liên hệ tư vấn</Button>
            </div>
          </div>
        </form>

      </Container>

      <Container className="flex flex-col gap-5">
        <div className="border-b pb-1 relative">
          <p className="text-2xl">Tour cùng loại</p>
        </div>
        <div className="flex gap-5 overflow-x-auto">
          <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
          <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
          <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
          <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        </div>
      </Container>
    </div>
  )
}

export default TourInfoPage