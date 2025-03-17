import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tabs } from "antd";
import { useReducer } from "react";

import Container from "@admin/component/Container";
import Header from "@admin/component/Header";
import BasicInfoForm from "../component/CreateTourPage/BasicInfoForm";
import TourContext, { initialState, reducer } from "../component/CreateTourPage/CreateTourContext";
import ScheduleForm from "../component/CreateTourPage/ScheduleForm";
import { TourResource } from "@/Api";

const items = [
  { key: '1', label: <p className="font-semibold">Thông tin cơ bản</p>, children: <BasicInfoForm /> },
  { key: '2', label: <p className="font-semibold">Lịch trình</p>, children: <ScheduleForm />, },
];

function CreateTourPage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  function onSubmit(e) {
    e.preventDefault()

    console.log(state)
    // TourResource.post('/create', state)
    //   .then(function (res) {
    //     console.log(res)
    //   })


  }

  return (
    <>
      <TourContext.Provider value={[state, dispatch]}>
        <Header>Quản lý tour du lịch / Thêm mới tour du lịch</Header>

        <Container className="flex gap-2">
          <Button variant="outlined" color="blue" >
            <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
            Quay lại
          </Button>
          <Button variant="outlined" color="blue" onClick={onSubmit}>
            <FontAwesomeIcon className="mr-3" icon={faSave} />
            Lưu
          </Button>
        </Container>

        <Container As="form" className="grow overflow-auto" method="post" encType="multipart/form-data">
          <Tabs type="card" defaultActiveKey="1" items={items} />
        </Container>
      </TourContext.Provider>
    </>
  );
}

export default CreateTourPage