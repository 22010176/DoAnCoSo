import { faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Tabs } from "antd"
import { useEffect, useReducer } from "react"
import { Link, useParams } from "react-router-dom"

import Container from "@admin/component/Container"
import Header from "@admin/component/Header"

import { TourResource } from "@/Api"
import BasicInfo from "../component/TourDetailsPage/BasicInfo"
import ScheduleInfo from "../component/TourDetailsPage/ScheduleInfo"
import TourDetailsContext, { initialState, reducer } from "../component/TourDetailsPage/TourDetailsContext"

const items = [
  { key: '1', label: <p className="font-semibold">Thông tin cơ bản</p>, children: <BasicInfo /> },
  { key: '2', label: <p className="font-semibold">Lịch trình</p>, children: <ScheduleInfo />, },
];

function TourDetailsPage() {
  const param = useParams()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function () {
    const { tourId } = param

    TourResource.get(`/details/${tourId}`)
      .then(res => res.data)
      .then(res => dispatch({
        type: "setValue",
        payload: res.data
      }))
  }, [param])
  console.log(state)

  return (
    <TourDetailsContext.Provider value={[state, dispatch]}>
      <Header>Quản lý tour du lịch / Thêm mới tour du lịch</Header>

      <Container className="flex gap-2">
        <Link to="/dashboard/tours">
          <Button variant="outlined" color="blue" >
            <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
            Quay lại
          </Button>
        </Link>
        <Button variant="outlined" color="blue" >
          <FontAwesomeIcon className="mr-3" icon={faEdit} />
          Sửa
        </Button>
      </Container>

      <Container className="grow overflow-auto">
        <Tabs type="card" defaultActiveKey="1" items={items} />
      </Container>
    </TourDetailsContext.Provider>

  )
}

export default TourDetailsPage