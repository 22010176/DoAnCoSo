import TextArea from "antd/es/input/TextArea"
import { useContext } from "react"
import { useParams } from "react-router-dom"

import TourDetailsContext from "./TourDetailsContext"

function ScheduleInfo() {
  const param = useParams()
  const [state] = useContext(TourDetailsContext)

  console.log(param)

  return (
    <div className="overflow-auto h-full flex flex-col gap-2">

      {state?.schedules?.map(({ id, thuTuNgay, deMuc, noiDung, tour }, j) => (
        <div key={id} id={id} className="w-full border p-5 mb-2 rounded-xl border-gray-300">
          <p className="text-xl font-bold mb-3">Ngày {thuTuNgay}</p>
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-lg font-semibold">Tiêu đề</label>
              <p name="title" >
                {deMuc}
              </p>
            </div>
            <div className="grow">
              <label className="text-lg font-semibold">Lịch trình</label>
              <TextArea className="pointer-events-none" name="content" value={noiDung} autoSize={{ maxRows: 3, minRows: 3 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScheduleInfo