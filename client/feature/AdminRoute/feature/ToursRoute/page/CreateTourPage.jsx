import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message, Tabs } from "antd";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TourResource } from "@/Api";
import Container from "@admin/component/Container";
import Header from "@admin/component/Header";
import BasicInfoForm from "../component/CreateTourPage/BasicInfoForm";
import TourContext, { initialState, reducer } from "../component/CreateTourPage/CreateTourContext";
import ScheduleForm from "../component/CreateTourPage/ScheduleForm";

const items = [
  { key: '1', label: <p className="font-semibold">Thông tin cơ bản</p>, children: <BasicInfoForm /> },
  { key: '2', label: <p className="font-semibold">Lịch trình</p>, children: <ScheduleForm />, },
];

function CreateTourPage() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const [state, dispatch] = useReducer(reducer, initialState)

  async function onSubmit(e) {
    e.preventDefault()

    // console.log(state)
    const result = await TourResource.post('/create', state)
      .then(res => res.data)

    if (!result.success) return messageApi.open({
      type: 'error',
      content: 'Không thể tạo tour mới!!!',
    });

    messageApi.open({
      type: 'success',
      content: 'Tạo tour mới thành công',
    });

    dispatch({ type: "clearInput" })
  }

  function genRandom() { dispatch({ type: 'genRandom' }) }

  return (
    <TourContext.Provider value={[state, dispatch]}>
      {contextHolder}
      <Header>Quản lý tour du lịch / Thêm mới tour du lịch</Header>

      <Container className="flex gap-2">
        <Link to="/dashboard/tours">
          <Button variant="outlined" color="blue" >
            <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
            Quay lại
          </Button>
        </Link>
        <Button variant="outlined" color="blue" onClick={onSubmit}>
          <FontAwesomeIcon className="mr-3" icon={faSave} />
          Lưu
        </Button>
        <Button variant="outlined" color="blue" onClick={genRandom}>
          Random
        </Button>
      </Container>

      <Container As="form" className="grow overflow-auto" method="post" encType="multipart/form-data">
        <Tabs type="card" defaultActiveKey="1" items={items} />
      </Container>
    </TourContext.Provider>
  );
}

export default CreateTourPage