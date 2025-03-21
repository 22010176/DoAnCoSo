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
  { title: <p className="text-white font-bold text-xl">Tất cả tour</p>, }
]

function TourPage() {
  const [list, setList] = useState([])
  const [view, setView] = useState('grid')

  function updateList() {
    console.log('test')
    setList([])
    TourResource.get('/customer')
      .then(res => res.data)
      .then(data => setList(data.data))
  }

  useEffect(function () {
    updateList()
  }, [])

  console.log(list)

  return (
    <div className="mb-20 min-h-250">
      <Header Element={Container} items={items} />

      <Container className="grid xl:grid-cols-[1fr_4fr] grid-cols-1 gap-10 relative py-5">
        <SortOption />

        <div className=" border-gray-500 rounded-2xl h-min xl:px-5">
          <DisplayOption setView={setView} view={view} />

          {view.toLowerCase() === 'list' && (
            <div className="flex flex-col gap-5 py-5">
              {list.length > 0 ? list?.map((i, j) => (
                <TourInfoHorVer
                  key={j}
                  id={i.id}
                  time={`${i.thoiGian}N${i.thoiGian - 1}Đ`}
                  start={i.xuatPhat}
                  price={i.giaNguoiLon}
                  image={i.hinhAnh}
                  name={i.tenTour}
                  love={i.yeuThich > 0}
                  vehicle={i.phuongTien}
                  loveCallback={updateList}
                />
              )) : <p>Không có tour nào</p>}
            </div>
          )}

          {view.toLowerCase() === 'grid' && (
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-5">
              {list?.map((i, j) =>
                <TourInfoVertical
                  key={j}
                  id={i.id}
                  image={i.hinhAnh}
                  start={i.xuatPhat}
                  name={i.tenTour}
                  time={`${i.thoiGian}N${i.thoiGian - 1}Đ`}
                  love={i.yeuThich > 0}
                  vehicle={i.phuongTien}
                  loveCallback={updateList}
                />
              )}
            </div>
          )}
          {/* <Pagination align="center" defaultCurrent={1} total={50} defaultPageSize={8} /> */}
        </div>
      </Container>
    </div>
  )
}

export default TourPage