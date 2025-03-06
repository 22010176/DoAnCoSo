import { CountryTour, GlobalTour, GoodTour } from '../../component/HomePage/TourContent'

import Banner from "../../component/HomePage/Banner"
import BookingWith from "../../component/HomePage/BookingWith"
import WhyChosing from '../../component/HomePage/WhyChosing'
import GuessReview from '../../component/HomePage/GuessReview'

function HomePage() {
  return (
    <>
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
    </>
  )
}

export default HomePage