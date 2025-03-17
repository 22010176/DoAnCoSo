import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useContext } from "react";

import TourContext from "./CreateTourContext";
import ScheduleFormItem from "./ScheduleItem";

function ScheduleForm() {
  const [state, dispatch] = useContext(TourContext)

  function addSchedule() {
    dispatch({ type: "addSchedule" })
  }

  function onItemChange(item) {
    const { name, value, index } = item
    dispatch({
      type: "scheduleUpdate",
      payload: { index, name, value }
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Button variant="solid" color="blue" onClick={addSchedule}>
          <FontAwesomeIcon icon={faPlus} />
          Thêm ngày
        </Button>
      </div>
      {state?.schedules?.map((i, j) => (
        <ScheduleFormItem key={j} {...i} onChange={onItemChange} />
      ))}
    </div>
  )
}

export default ScheduleForm