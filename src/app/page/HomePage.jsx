import { Button, Input } from "antd"
import Navbar from "../../component/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faLocationDot, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import Banner from "../component/Banner"

function HomePage() {
  return (
    <div className="w-screen h-screen ">
      {/* navbar */}
      <Navbar />

      {/* Content Vì sao nên chọn ChillTravel */}
      <Banner />
      {/* Booking cùng  ChillTravel  */}

      {/* Hiểu hơn về chúng tôi */}

      {/* Tour giá tốt */}


      {/* Tour  trong nước */}

      {/* Tour nước ngoài */}

      {/* Đánh giá từ khách hàng */}

      {/* Đồng hành cùng chúng tôi */}

      {/* Theo dõi và cập nhật tin tức mới nhất */}
    </div>
  )
}

export default HomePage