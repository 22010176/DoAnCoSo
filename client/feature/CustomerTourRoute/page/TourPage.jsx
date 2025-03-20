import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Header from "@/component/Header"
import TourInfoHorVer from "@/component/TourInfo/TourHorVer"
import TourInfoVertical from "@/component/TourInfo/TourVertical"

import Container from "../component/TourPage/Container"
import DisplayOption from "../component/TourPage/DisplayOption"
import SortOption from "../component/TourPage/SortOption"
import { TourResource } from "@/Api"

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Tất cả sản phẩm</p>, }
]

function TourPage() {
  const [list, setList] = useState([])
  const [view, setView] = useState('list')


  useEffect(function () {
    TourResource.get('/customer')
      .then(res => res.data)
      .then(data => setList(data.data))
  }, [])

  console.log(list)
  /*
  
  diemDen: "sbWmkWmFXtrWARsnVTPS"
  giaEmBe: 14910
  giaNguoiLon: 81321
  giaTreEm: 82236
  id: "4d3b7eae-ca25-467e-9f4e-710f179d0e72"
  tenPhuongTien: "máy bay"
  tenTour: "9V3Xa1MCpwjNJ5k3Zwoq"
  xuatPhat: "FsTm8tLrAAWb4YmUKPyU"
  */
  return (
    <div className="mb-20 min-h-250">
      <Header Element={Container} items={items} />

      <Container className="grid xl:grid-cols-[1fr_4fr] grid-cols-1 gap-10 relative py-5">
        <SortOption />

        <div className=" border-gray-500 rounded-2xl h-min xl:px-5">
          <DisplayOption setView={setView} view={view} />

          {view.toLowerCase() === 'list' && (
            <div className="flex flex-col gap-5 py-5">
              {list?.map((i, j) => (
                <TourInfoHorVer
                  key={j}
                  id={i.id}
                  time={`${i.thoiGian}N${i.thoiGian - 1}Đ`}
                  start={i.xuatPhat}
                  price={i.giaNguoiLon}
                  image={i.hinhAnh}
                  name={i.tenTour}
                  vehicle={i.phuongTien}
                />
              ))}
            </div>
          )}

          {view.toLowerCase() === 'grid' && (
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-5">
              {list?.map((i, j) => <TourInfoVertical key={j} image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />)}
            </div>
          )}
          {/* <Pagination align="center" defaultCurrent={1} total={50} defaultPageSize={8} /> */}
        </div>
      </Container>
    </div>
  )
}

export default TourPage