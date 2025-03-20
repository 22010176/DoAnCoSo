import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DatePicker, Input } from "antd";
import { useContext } from "react";

import TourInfoContext from "./TourInfoContext";

function OrderForm() {
  const [state, dispatch] = useContext(TourInfoContext)

  console.log(state)

  return (
    <form className="bg-blue-100 rounded-xl h-min p-5 flex flex-col gap-4 sticky top-5">
      <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
        <p className="text-4xl text-blue-500 font-semibold ">{state.info?.giaNguoiLon}</p>
        <p><strong>Mã tour:</strong> {state.info?.id}</p>
      </div>

      <div className="flex gap-5 border-b border-gray-300 pb-3">
        <p className="font-bold">Mã giảm giá</p>
      </div>

      <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
        <div className="flex gap-3">
          <Button size="large" variant="solid" color="blue"><FontAwesomeIcon icon={faCalendar} /></Button>
          <DatePicker size="large" className="grow" placeholder="Chọn ngày đi" />
        </div>
        <div>
          <p className="font-bold mb-3">Loại khách</p>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-5">
            <p className="text-nowrap">Người lớn</p>
            <Input type="number" />
            <p className="font-bold text-blue-500 2xl:text-lg">{state.info?.giaNguoiLon}</p>

            <p className="text-nowrap">Trẻ em</p>
            <Input type="number" />
            <p className="font-bold text-blue-500 2xl:text-lg">{state.info?.giaTreEm}</p>

            <p className="text-nowrap">Em bé</p>
            <Input type="number" />
            <p className="font-bold text-blue-500 2xl:text-lg">{state.info?.giaEmBe}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <p>Tổng tiền</p>
          <p className="text-2xl font-bold text-blue-500">6.500.000₫</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Button size="large" variant="solid" color="blue">Đặt ngay</Button>
          <Button size="large" variant="outlined" color="blue">Liên hệ tư vấn</Button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm