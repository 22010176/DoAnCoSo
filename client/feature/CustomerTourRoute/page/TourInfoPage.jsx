import { Link, useParams } from "react-router-dom"

import Header from "@/component/Header"

import Container from "../component/TourInfoPage/Container"
import OrderForm from "../component/TourInfoPage/OrderForm"
import TourDetail from "../component/TourInfoPage/TourDetail"
import TourInfoHeader from "../component/TourInfoPage/TourInfoHeader"
import TourList from "../component/TourInfoPage/TourList"

import TourInfoContext, { initialState, reducer } from "../component/TourInfoPage/TourInfoContext"
import { useEffect, useReducer } from "react"
import { TourResource } from "@/Api"

const items = [
  { title: <Link to="/" style={{ color: "white" }} className="text-xl font-semibold" >Trang chủ</Link>, },
  { title: <Link to="/tours" style={{ color: "white" }} className="text-white font-semibold text-xl">Sản phẩm</Link>, },
]

function TourInfoPage() {
  const { id } = useParams()

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function () {
    TourResource.get(`/customer/${id}`)
      .then(res => res.data)
      .then(data => {
        dispatch({ type: 'init', payload: data.data })
      })
  }, [id])

  return (
    <div className="mb-10 flex flex-col gap-5">
      <TourInfoContext.Provider value={[state, dispatch]}>
        <Header Element={Container} items={items.concat({ title: <p className="text-white font-bold text-xl">{id}</p> })} />

        <Container>
          <TourInfoHeader />
        </Container>

        <Container className="relative grid 2xl:grid-cols-[2.2fr_1fr] xl:grid-cols-[2fr-1fr] lg:grid-cols-[1.5fr_1fr] gap-10">
          <TourDetail />

          <OrderForm />
        </Container>

        <Container className="flex flex-col gap-5">
          <TourList />
        </Container>
      </TourInfoContext.Provider>
    </div>
  )
}

export default TourInfoPage