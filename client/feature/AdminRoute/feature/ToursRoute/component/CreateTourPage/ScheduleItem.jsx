import { Input } from "antd"
import TextArea from "antd/es/input/TextArea"

function ScheduleFormItem() {
  return (
    <div className="w-full border p-5 rounded-xl border-gray-300">
      <p className="text-xl font-bold mb-3">Ngày 1</p>
      <div className="flex gap-5">
        <div>
          <label className="text-lg font-semibold">Tiêu đề</label>
          <Input />
        </div>
        <div className="grow">
          <label className="text-lg font-semibold">Lịch trình</label>
          <TextArea autoSize={{ maxRows: 10, minRows: 10 }} />
        </div>
      </div>
    </div>
  )
}

export default ScheduleFormItem