import { faBus, faCalendar, faLocationDot, faPlane, faShip, faTrain, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";
import { useContext } from "react";
import TourInfoContext from "./TourInfoContext";

function TourInfoHeader() {
  const [state] = useContext(TourInfoContext)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">{state.info?.tenTour}</p>
      <Rate value={4.5} allowHalf disabled />
      <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 flex flex-col lg:gap-8 gap-3">
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Khởi hành từ</p>
            <p className="text-blue-600">{state.info?.xuatPhat}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Điểm đến</p>
            <p className="text-blue-600">{state.info?.diemDen}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faCalendar} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Thời gian</p>
            <p className="text-blue-600">{`${state.schedules?.length}N${state.schedules?.length - 1}Đ`}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Số chỗ còn nhận</p>
            <p className="text-blue-600">Còn chỗ</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            {/* <FontAwesomeIcon icon={faPlane}  /> */}
            {state.info?.maPhuongTien === 'xe_bus' && <FontAwesomeIcon className="text-2xl" icon={faBus} />}
            {state.info?.maPhuongTien === 'may_bay' && <FontAwesomeIcon className="text-2xl" icon={faPlane} />}
            {state.info?.maPhuongTien === 'tau_thuy' && <FontAwesomeIcon className="text-2xl" icon={faShip} />}
            {state.info?.maPhuongTien === 'tau_hoa' && <FontAwesomeIcon className="text-2xl" icon={faTrain} />}
          </div>
          <div>
            <p className="text-gray-600">Di chuyển bằng</p>
            <p className="text-blue-600">{state.info?.tenPhuongTien}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourInfoHeader