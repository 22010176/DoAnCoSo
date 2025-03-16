import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tabs } from "antd";

import Container from "@admin/component/Container";
import Header from "@admin/component/Header";
import BasicInfoForm from "../component/CreateTourPage/BasicInfoForm";
import ScheduleForm from "../component/CreateTourPage/ScheduleForm";

const items = [
  { key: '1', label: <p className="text-lg">Thông tin cơ bản</p>, children: <BasicInfoForm /> },
  { key: '2', label: <p className="text-lg">Lịch trình</p>, children: <ScheduleForm />, },
];

function CreateTourPage() {
  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <Header>Quản lý tour du lịch / Thêm mới tour du lịch</Header>

      <Container className="flex gap-2">
        <Button variant="outlined" color="blue" >
          <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
          Quay lại
        </Button>
        <Button variant="outlined" color="blue" >
          <FontAwesomeIcon className="mr-3" icon={faSave} />
          Lưu
        </Button>
      </Container>

      <Container As="form" className="grow overflow-auto" method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
        <Tabs type="card" defaultActiveKey="2" items={items} />
      </Container>
    </>
  );
}

export default CreateTourPage