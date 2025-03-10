import { faCalendar, faLocationDot, faPlane, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";

function TourInfoHeader() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">Du lịch Nha Trang - VinWonders Nha Trang - Hòn Mun 3N2Đ</p>
      <Rate value={4.5} allowHalf disabled />
      <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 flex flex-col lg:gap-8 gap-3">
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Khởi hành từ</p>
            <p className="text-blue-600">Hà Nội</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Điểm đến</p>
            <p className="text-blue-600">Nha Trang</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center size-12 bg-blue-400/80 relative justify-center text-white rounded-xl">
            <FontAwesomeIcon icon={faCalendar} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Thời gian</p>
            <p className="text-blue-600">3N2Đ</p>
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
            <FontAwesomeIcon icon={faPlane} className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-600">Di chuyển bằng</p>
            <p className="text-blue-600">Máy bay</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourInfoHeader