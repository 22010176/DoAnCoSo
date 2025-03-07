import { faClock, faHeart, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";

function TourInfoVertical({ image, start, name, time }) {
  return (
    <div className="tour-item border border-blue-500 rounded-xl overflow-hidden p-3 flex flex-col gap-2 min-w-60">
      <div className="relative">
        <img className="md:h-full md:w-auto size-full rounded-xl" src={image} alt="" />
        <div className="absolute right-3 top-3 text-white bg-black/50 hover:bg-black/70 size-8 rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="absolute right-0 bottom-0 rounded-br-xl rounded-tr text-white bg-black/50 hover:bg-black/70 size-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faPlane} />
        </div>
      </div>
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faLocationDot} /> Khởi hành từ: {start}</p>
      <p className=" font-bold">{name}</p>
      <Rate />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faClock} />Thời gian: {time}</p>
    </div>
  )
}

export default TourInfoVertical