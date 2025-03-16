import { Input } from "antd"
import TextArea from "antd/es/input/TextArea"

function ScheduleFormItem({ index, title, content, onChange }) {

  function itemOnChange(e) {
    const elem = e.target
    const { name, value } = elem

    if (typeof onChange === 'function') onChange({ index, name, value })
  }

  return (
    <div className="w-full border p-5 rounded-xl border-gray-300">
      <p className="text-xl font-bold mb-3">Ngày {index}</p>
      <div className="flex gap-5">
        <div>
          <label className="text-lg font-semibold">Tiêu đề</label>
          <Input onChange={itemOnChange} name="scheduleTitle" value={title} />
        </div>
        <div className="grow">
          <label className="text-lg font-semibold">Lịch trình</label>
          <TextArea onChange={itemOnChange} name="scheduleContent" value={content} autoSize={{ maxRows: 10, minRows: 10 }} />
        </div>
      </div>
    </div>
  )
}

export default ScheduleFormItem