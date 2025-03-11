import { Pagination } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

import Header from "@/component/Header"
import TourInfoHorVer from "@/component/TourInfo/TourHorVer"
import TourInfoVertical from "@/component/TourInfo/TourVertical"

import Container from "../component/TourPage/Container"
import DisplayOption from "../component/TourPage/DisplayOption"
import SortOption from "../component/TourPage/SortOption"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Tất cả sản phẩm</p>, }
]

function TourPage() {
  const [view, setView] = useState('list')
  return (
    <div className="mb-20 min-h-250">
      <Header Element={Container} items={items} />

      <Container className="grid xl:grid-cols-[1fr_4fr] grid-cols-1 gap-10 relative py-5">
        <SortOption />

        <div className=" border-gray-500 rounded-2xl h-min xl:px-5">
          <DisplayOption setView={setView} view={view} />

          {view.toLowerCase() === 'list' && (
            <div className="flex flex-col gap-5 py-5">
              {new Array(10).fill().map((i, j) => <TourInfoHorVer key={j} id="test" time="5N4D" start="Ha noi" price="1000000" image="\assets\imgs\sp4.webp" name="Du lịch Nha Trang - VinWonders Nha Trang - Hòn Mun 3N2Đ" />)}
            </div>
          )}

          {view.toLowerCase() === 'grid' && (
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-5">
              {new Array(10).fill().map((i, j) => <TourInfoVertical key={j} image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />)}
            </div>
          )}
          <Pagination align="center" defaultCurrent={1} total={50} defaultPageSize={8} />
        </div>
      </Container>
    </div>
  )
}

export default TourPage