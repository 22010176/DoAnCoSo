import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DatePicker, Input } from "antd";
import { useContext } from "react";

import TourInfoContext from "./TourInfoContext";
import { CustomerOrderResource } from "@/Api";

function OrderForm() {
  const [state, dispatch] = useContext(TourInfoContext)

  const emBe = state.form?.emBe || 0
  const nguoiLon = state.form?.nguoiLon || 0
  const treEm = state.form?.treEm || 0

  const giaEmBe = state.info?.giaEmBe || 0
  const giaNguoiLon = state.info?.giaNguoiLon || 0
  const giaTreEm = state.info?.giaTreEm || 0


  function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.tour = state.info.id

    console.log(data)
    CustomerOrderResource.post('/', data)
      .then(res => res.data)
      .then(data => console.log(data))
  }

  function onChange(e) {
    const elem = e.target
    dispatch({ type: 'updateForm', payload: { name: elem.name, value: elem.value } })
    // console.log(e)
  }
  console.log(state)


  return (
    <form className="bg-blue-100 rounded-xl h-min p-5 flex flex-col gap-4 sticky top-5" onSubmit={onSubmit}>
      <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
        <p className="text-4xl text-blue-500 font-semibold ">{state.info?.giaNguoiLon}</p>
        <p><strong>Mã tour:</strong> {state.info?.id}</p>
      </div>

      {/* <div className="flex gap-5 border-b border-gray-300 pb-3">
        <p className="font-bold">Mã giảm giá</p>
      </div> */}

      <div className="flex flex-col gap-5 border-b border-gray-300 pb-3">
        <div className="flex gap-3">
          {/* <label htmlFor="dateInput" > */}
          <Button size="large" variant="solid" color="blue"><FontAwesomeIcon icon={faCalendar} /></Button>
          {/* </label> */}
          <DatePicker required id="dateInput" name="date" size="large" className="grow" placeholder="Chọn ngày đi" />
        </div>
        <div>
          <p className="font-bold mb-3">Loại khách</p>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-5">
            <p className="text-nowrap">Người lớn</p>
            <Input value={nguoiLon} name="nguoiLon" type="number" onChange={onChange} />
            <p className="font-bold text-blue-500 2xl:text-lg">{giaNguoiLon}</p>

            <p className="text-nowrap">Trẻ em</p>
            <Input value={treEm} name="treEm" type="number" onChange={onChange} />
            <p className="font-bold text-blue-500 2xl:text-lg">{giaTreEm}</p>

            <p className="text-nowrap">Em bé</p>
            <Input value={emBe} name="emBe" type="number" onChange={onChange} />
            <p className="font-bold text-blue-500 2xl:text-lg">{giaEmBe}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <p>Tổng tiền</p>
          <p className="text-2xl font-bold text-blue-500">{emBe * giaEmBe + treEm * giaTreEm + nguoiLon * giaNguoiLon}₫</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Button htmlType="submit" size="large" variant="solid" color="blue">Đặt ngay</Button>
          <Button size="large" variant="outlined" color="blue">Liên hệ tư vấn</Button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm