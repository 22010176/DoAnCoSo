import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from "antd"

import Navbar from "../../component/Navbar"
import Banner from "../component/Banner"
import BookingWith from "../component/BookingWith"
import WhyChosing from "../component/WhyChosing"

function HomePage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* navbar */}
      <Navbar />

      {/* Content Vì sao nên chọn ChillTravel */}
      <Banner />

      {/* Booking cùng  ChillTravel  */}
      <WhyChosing />

      {/* Booking cùng ND Travel */}
      <BookingWith />

      {/* Tour giá tốt */}
      <div className="xl:px-50 px-5 py-20 flex flex-col gap-20">
        <div className="flex justify-between items-center">
          <div className="leading-10">
            <p className="text-4xl font-bold hover:text-blue-500">Tour giá tốt</p>
            <p className="text-gray-600">Hơn 1.000 tour đa dạng giá hời có hạn</p>
          </div>
          <Link className="flex items-center gap-2 text-blue-500 text-lg" >
            Xem thêm
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

      </div>

      {/* Tour  trong nước */}

      {/* Tour nước ngoài */}

      {/* Đánh giá từ khách hàng */}

      {/* Đồng hành cùng chúng tôi */}

      {/* Theo dõi và cập nhật tin tức mới nhất */}
    </div>
  )
}

export default HomePage