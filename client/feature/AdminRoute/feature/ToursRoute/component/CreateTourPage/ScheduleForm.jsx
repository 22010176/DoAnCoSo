import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useContext } from "react";

import TourContext from "./CreateTourContext";

function ScheduleForm() {
  const [state, dispatch] = useContext(TourContext)

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Button variant="solid" color="blue">
          <FontAwesomeIcon icon={faPlus} />
          Thêm ngày
        </Button>
      </div>

    </div>
  )
}

export default ScheduleForm