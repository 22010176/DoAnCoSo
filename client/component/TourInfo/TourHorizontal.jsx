import { faClock, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import LoveButton from "./LoveBtn";

function TourInfoHorizontal({ id, image, start, name, love, time, loveCallback }) {
  return (
    <Link to="/tours/23" className="tour-item border border-blue-500 rounded-xl overflow-hidden p-3 flex flex-col gap-2 min-w-60">
      <div key={j} className="relative">
        <img className="h-full w-auto rounded-xl" src={image} alt="" />
        <LoveButton id={id} love={love} callback={loveCallback} />
        <div className="absolute right-0 bottom-0 rounded-br-xl rounded-tr text-white bg-black/50 hover:bg-black/70 size-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faPlane} />
        </div>
      </div>
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faLocationDot} /> Khởi hành từ: {start}</p>
      <p className=" font-bold">{name}</p>
      <Rate />
      <p className="text-gray-600 flex gap-2 items-center"><FontAwesomeIcon icon={faClock} />Thời gian: {time}</p>
    </Link>
  )
}

export default TourInfoHorizontal