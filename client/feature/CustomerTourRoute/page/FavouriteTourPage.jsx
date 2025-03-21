import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { TourResource } from "@/Api"
import Header from "@/component/Header"

import Container from "@/component/Container"
import TourInfoVertical from "@/component/TourInfo/TourVertical"


const items = [
  { title: <Link to="/" style={{ color: "white" }} className="text-xl font-semibold" >Trang chủ</Link>, },
  { title: <Link to="/tours" style={{ color: "white" }} className="text-white font-semibold text-xl">Tour</Link>, },
  { title: <p className="text-white font-bold text-xl">Yêu thích</p>, }
]

function FavouriteTourPage() {
  const location = useLocation()
  const [list, setList] = useState([])

  function updateList() {
    TourResource.get(`/favourite`)
      .then(res => res.data)
      .then(data => {
        setList(data.data)
        // dispatch({ type: 'init', payload: data.data })
      })
  }

  useEffect(function () {
    updateList()
  }, [location])
  console.log(list)

  return (
    <div className="mb-10 min-h-150 flex flex-col gap-5">
      {/* <TourInfoContext.Provider value={[state, dispatch]}> */}
      <Header Element={Container} items={items} />

      <Container className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
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
      </Container>
      {/* <Container>
            <TourInfoHeader />
          </Container>
  
          <Container className="relative grid 2xl:grid-cols-[2.2fr_1fr] xl:grid-cols-[2fr-1fr] lg:grid-cols-[1.5fr_1fr] gap-10">
            <TourDetail />
  
            <OrderForm />
          </Container>
  
          <Container className="flex flex-col gap-5">
            <TourList />
          </Container> */}
      {/* </TourInfoContext.Provider> */}
    </div>
  )

}

export default FavouriteTourPage;