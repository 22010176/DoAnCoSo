import { faBus, faClock, faHeart, faLocationDot, faPlane, faShip, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import LoveButton from "./LoveBtn";


function TourInfoHorVer({ image, id, love, name, time, start, price, vehicle, loveCallback }) {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_3fr_1fr] flex flex-col gap-5 border border-gray-300 p-3 rounded-xl">
      <div className="relative">
        <Link to={`/tours/${id}`}>
          <img className="lg:h-full lg:w-auto size-full object-center rounded-xl" src={image} alt="" />
        </Link>
        <LoveButton id={id} love={love} callback={loveCallback} />
        <div className="absolute right-0 bottom-0 rounded-br-xl rounded-tr text-white bg-black/50 hover:bg-black/70 size-8 flex justify-center items-center">
          {vehicle === '1' && <FontAwesomeIcon icon={faBus} />}
          {vehicle === '2' && <FontAwesomeIcon icon={faPlane} />}
          {vehicle === '3' && <FontAwesomeIcon icon={faShip} />}
          {vehicle === '4' && <FontAwesomeIcon icon={faTrain} />}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-gray-500">{id}</p>
        <p className="font-bold xl:text-xl lg:text-lg text">{name}</p>
        <Rate disabled />
        <p className="flex gap-2 items-center text-gray-500">
          <FontAwesomeIcon icon={faClock} />Thời gian: {time}
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-around items-start">
        <p className="flex gap-2 w-30 items-center text-gray-500">
          <FontAwesomeIcon icon={faLocationDot} />Khởi hành từ: {start.slice(0, 10)}
        </p>
        <p className="2xl:text-2xl lg:text-lg text-2xl text-blue-500 font-bold">{price}₫</p>
        <Button className="w-max" size="large" variant="outlined" color="blue">Xem chi tiết</Button>
      </div>
    </div>
  )
}

export default TourInfoHorVer