import { faClock, faHeart, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";

function TourInfoHorVer({ image, id, name, time, start, price }) {
  return (
    <Link to="/tours/23" className="lg:grid lg:grid-cols-[2fr_3fr_1fr] flex flex-col gap-5 border border-gray-300 p-3 rounded-xl">
      <div className="relative">
        <img className="lg:h-full lg:w-auto size-full object-center rounded-xl" src={image} alt="" />
        <div className="absolute right-3 top-3 text-white bg-black/50 hover:bg-black/70 size-8 rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="absolute right-0 bottom-0 rounded-br-xl rounded-tr text-white bg-black/50 hover:bg-black/70 size-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faPlane} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-gray-500">{id}</p>
        <p className="font-bold xl:text-xl lg:text-lg text">{name}</p>
        <Rate disabled />
        <p className="flex gap-2 items-center text-gray-500"><FontAwesomeIcon icon={faClock} />Thời gian: {time}</p>
      </div>
      <div className="flex flex-col gap-3 justify-around items-start">
        <p className="flex gap-2 items-center text-gray-500"><FontAwesomeIcon icon={faLocationDot} />Khởi hành từ: {start}</p>
        <p className="2xl:text-2xl lg:text-lg text-2xl text-blue-500 font-bold">{price}₫</p>
        <Button className="w-full" size="large" variant="outlined" color="blue">Xem chi tiết</Button>
      </div>
    </Link>
  )
}

export default TourInfoHorVer