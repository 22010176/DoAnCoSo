import { Button, Tabs } from "antd"
import { useRef, useState } from "react";
import ScheduleFormItem from "./ScheduleItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



function ScheduleForm() {


  return (
    <div className="flex flex-col gap-5">
      <div>
        <Button variant="solid" color="blue">
          <FontAwesomeIcon icon={faPlus} />
          Thêm ngày
        </Button>
      </div>

      <ScheduleFormItem />
      <ScheduleFormItem />
      <ScheduleFormItem />
      <ScheduleFormItem />
      <ScheduleFormItem />
    </div>
  )
}

export default ScheduleForm