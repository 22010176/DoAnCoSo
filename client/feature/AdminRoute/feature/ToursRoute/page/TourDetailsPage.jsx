import { faArrowLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, message, Tabs } from "antd"
import { useEffect, useReducer } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { TourResource } from "@/Api"
import Container from "@admin/component/Container"
import Header from "@admin/component/Header"

import BasicInfo from "../component/TourDetailsPage/BasicInfo"
import ScheduleInfo from "../component/TourDetailsPage/ScheduleInfo"
import TourDetailsContext, { initialState, reducer } from "../component/TourDetailsPage/TourDetailsContext"

const items = [
  { key: '1', label: <p className="font-semibold">Thông tin cơ bản</p>, children: <BasicInfo /> },
  { key: '2', label: <p className="font-semibold">Lịch trình</p>, children: <ScheduleInfo />, },
];

function TourDetailsPage() {
  const { tourId } = useParams()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function () {
    TourResource.get(`/details/${tourId}`)
      .then(res => res.data)
      .then(res => dispatch({ type: "setValue", payload: res.data }))
  }, [tourId])

  async function onDelete() {
    // console.log(tourId)
    const result = await TourResource.delete('/', { data: { id: tourId } })
      .then(data => data.data)

    console.log(result)

    if (!result.success) return messageApi.open({
      type: 'error',
      content: 'Xóa sản phẩm thất bại',
    });

    messageApi.open({
      type: 'info',
      content: 'Xóa sản phẩm thành công',
    })

    setTimeout(function () {
      navigate('/dashboard/tours')
    }, 1500)
    console.log(result)

  }

  return (
    <TourDetailsContext.Provider value={[state, dispatch]}>
      {contextHolder}
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
        <Button variant="outlined" color="red" onClick={onDelete} >
          <FontAwesomeIcon className="mr-3" icon={faTrash} />
          Xóa
        </Button>
      </Container>

      <Container className="grow overflow-auto">
        <Tabs type="card" defaultActiveKey="1" items={items} />
      </Container>
    </TourDetailsContext.Provider>

  )
}

export default TourDetailsPage