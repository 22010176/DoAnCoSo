import { DatePicker, Select } from "antd";

function ReceiveSetting() {
  return (
    <div className="bg-gray-50 flex flex-col gap-2 p-4 shadow rounded h-min xl:order-last">
      <p className=" text-lg font-bold">Thời gian nhận</p>
      <div className="flex gap-5">
        <DatePicker placeholder="Chọn ngày" className="w-35" />

        <Select className="w-40" placeholder="Chọn thời gian nhận"
          options={[
            { value: '8_12', label: '8h00-12h00' },
            { value: '14_18', label: '14h00-18h00' },
            { value: '19_21', label: '19h00-21h00' },
          ]} />
      </div>
    </div>
  )
}

export default ReceiveSetting