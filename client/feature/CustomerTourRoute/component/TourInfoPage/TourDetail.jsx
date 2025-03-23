import { Tabs } from "antd";
import { useContext, useEffect, useState } from "react";

import { TourResource } from "@/Api";
import LoveButton from "@/component/TourInfo/LoveBtn";
import TourInfoContext from "./TourInfoContext";

function TourDetail() {
  const [state, dispatch] = useContext(TourInfoContext)
  const [image, setImage] = useState(0)

  const tabItem = [
    {
      key: '1',
      label: <p className="font-bold">Mô tả</p>,
      children: <p className=" break-words overflow-scroll w-full p-3 rounded-b-xl" >{state.info?.moTa}</p>,
    },
    {
      key: '2',
      label: <p className="font-bold">Lịch trình</p>,
      children: <div className="p-5 rounded-b-xl ">
        {state.schedules.map((schedule, index) => (
          <div key={index} className="mb-4 border-b">
            <p className="font-bold text-lg">Ngày {schedule.thuTuNgay}</p>
            <p className="font-semibold">{schedule.deMuc}</p>
            <p className="break-words">{schedule.noiDung}</p>
          </div>
        ))}
      </div>,
    },
    {
      key: '4',
      label: <p className="font-bold">Đánh giá tour</p>,
      children: <div className="h-50 p-3 rounded-b-xl">

      </div>,
    },
  ]

  function LoveCallback() {
    TourResource.get(`/customer/${state.info?.id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        dispatch({ type: 'init', payload: data.data })
      })
  }

  useEffect(function () {
    setImage(0)
  }, [state])

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="relative w-full">
          <img className="rounded-xl w-full" src={state.images?.[image]?.hinhAnh} alt="" />
          <LoveButton id={state.info?.id} love={state.info?.yeuThich > 0} callback={LoveCallback} />
        </div>

        <div className="grid grid-cols-5 gap-5">
          {state.images.slice(0, 5).map((img, index) => (
            <button
              key={index}
              className={[
                "rounded-xl p-2 border  hover:border-blue-500",
                index === image ? 'border-blue-500' : 'border-gray-200'].join(' ')}
              onClick={() => setImage(index)}>
              <img className="rounded-lg " src={img.hinhAnh} alt="" />
            </button>
          ))}
        </div>
      </div>

      <Tabs className="shadow-xl w-150 overflow-hidden rounded-b-xl" type="card" defaultActiveKey="1" items={tabItem} />
    </div>

  )
}

export default TourDetail