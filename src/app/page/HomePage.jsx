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
      <div></div>

      {/* Tour  trong nước */}

      {/* Tour nước ngoài */}

      {/* Đánh giá từ khách hàng */}

      {/* Đồng hành cùng chúng tôi */}

      {/* Theo dõi và cập nhật tin tức mới nhất */}
    </div>
  )
}

export default HomePage