import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";

export function TourInfo({ image, start, name, time }) {
  return (
    <div className="tour-item border border-blue-500 rounded-xl overflow-hidden p-3 flex flex-col gap-2 min-w-60">
      <img className="rounded-lg" src={image} alt="" />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faLocationDot} /> Khởi hành từ: {start}</p>
      <p className=" font-bold">{name}</p>
      <Rate />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faClock} />Thời gian: {time}</p>
    </div>
  )
}

export function TourInfoHorizontal({ image, start, name, time }) {
  return (
    <div className="tour-item border border-blue-500 rounded-xl overflow-hidden p-3 flex flex-col gap-2 min-w-60">
      <img className="rounded-lg" src={image} alt="" />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faLocationDot} /> Khởi hành từ: {start}</p>
      <p className=" font-bold">{name}</p>
      <Rate />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faClock} />Thời gian: {time}</p>
    </div>
  )
}