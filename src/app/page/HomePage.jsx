

import Navbar from "../../component/Navbar"
import Banner from "../component/Banner"
import BookingWith from "../component/BookingWith"
import WhyChosing from "../component/WhyChosing"
import { CountryTour, GlobalTour, GoodTour } from "../component/TourContent"
import GuessReview from "../component/GuessReview"
import Contact from "../component/Contact"
import Accompany from "../component/Accompany"
import Footer from "../../component/Footer"

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
      <GoodTour />

      {/* Tour  trong nước */}
      <CountryTour />

      {/* Tour nước ngoài */}
      <GlobalTour />

      {/* Đánh giá từ khách hàng */}
      <GuessReview />

      {/* Đồng hành cùng chúng tôi */}
      <Accompany />

      {/* Theo dõi và cập nhật tin tức mới nhất */}
      <Contact />

      <Footer />
    </div>
  )
}

export default HomePage