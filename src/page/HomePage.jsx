import Banner from "../component/home/Banner"
import BookingWith from "../component/home/BookingWith"
import WhyChosing from '../component/home/WhyChosing'
import { CountryTour, GlobalTour, GoodTour } from '../component/home/TourContent'
import GuessReview from '../component/home/GuessReview'

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