import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowRightArrowLeft, faClock, faLocationDot, faLocationPin, faLocationPinLock } from "@fortawesome/free-solid-svg-icons"
import { Carousel, Collapse, ConfigProvider, Rate } from "antd"
import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const items = [
  {
    key: '1',
    label: <p className="font-bold text-lg uppercase">Hướng dẫn</p>,
    showArrow: false,
    children: (
      <div className="-mt-5">
        <p className="text-gray-600">Trang chủ</p>
        <p className="text-gray-600">Giới thiệu</p>
        <p className="text-gray-600">Tour du lịch</p>
        <p className="text-gray-600">Tin tức</p>
        <p className="text-gray-600">Faqs</p>
        <p className="text-gray-600">Liên hệ</p>
      </div>
    ),
  },
  {
    key: '2',
    label: <p className="font-bold text-lg uppercase">Thông tin cần biết</p>,
    showArrow: false,
    children: (
      <div className="-mt-5">
        <p className="text-gray-600">Về chúng tôi</p>
        <p className="text-gray-600">Câu hỏi thường gặp</p>
        <p className="text-gray-600">Điều kiện, điều khoản</p>
        <p className="text-gray-600">Quy chế hoạt động</p>
        <p className="text-gray-600">Liên hệ</p>
      </div>
    ),
  },
  {
    key: '3',
    label: <p className="font-bold text-lg uppercase mb-2">Kết nốI</p>,
    showArrow: false,
    children: (
      <div className="flex gap-2 -mt-5">
        <FontAwesomeIcon icon={faFacebook} size="2xl" />
        <FontAwesomeIcon icon={faYoutube} size="2xl" />
        <FontAwesomeIcon icon={faTwitter} size="2xl" />
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
        <FontAwesomeIcon icon={faGoogle} size="2xl" />
      </div>
    ),
  },
  {
    key: '4',
    label: <p className="font-bold text-lg uppercase mb-2">Tải ứng dụng</p>,
    showArrow: false,
    children: (
      <div className="flex gap-2 -mt-5">
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img-app-store.png?1728351987196" alt="" />
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img-google-play.png?1728351987196" alt="" />
      </div>
    ),
  },
  {
    key: '5',
    label: <p className="font-bold text-lg uppercase">Phương thức thanh toán</p>,
    showArrow: false,
    children: (
      <div className="flex gap-2 -mt-5">
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_1.png?1728351987196" alt="" />
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_2.png?1728351987196" alt="" />
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_3.png?1728351987196" alt="" />
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_4.png?1728351987196" alt="" />
        <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_5.png?1728351987196" alt="" />
      </div>
    ),
  },
]

const theme = {
  components: {
    Collapse: {
      /* here is your component tokens */
      headerPadding: "10px 0px",
      contentPadding: "0px 0px",
      padding: '0px'
    },
  },
}

function Footer() {
  return (
    <ConfigProvider theme={theme}>
      <div className="xl:mx-25 lg:mx-10 mx-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 my-20 grid gap-10">
        <div className="xl:col-span-1 md:col-span-3 col-span-1 flex flex-col gap-3">
          <p className="font-bold text-xl">Thông tin liên hệ</p>

          <div>
            <p className="font-bold ">Địa chỉ</p>
            <p className="text-gray-600">Tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội</p>
          </div>

          <div>
            <p className="font-bold ">Email</p>
            <p className="text-gray-600">support@sapo.vn</p>
          </div>

          <div>
            <p className="font-bold ">Hotline</p>
            <p className="text-gray-600">1900 6750</p>
          </div>

          <div>
            <p className="font-bold ">Thời gian hỗ trợ</p>
            <p className="text-gray-600">08:30 - 21:30 các ngày trong tuần</p>
          </div>
        </div>

        <Collapse size="small" className="md:hidden block m-0 p-0" ghost items={items} />

        <div className="md:flex hidden flex-col gap-3 ">
          <p className="font-bold text-lg">Hướng dẫn</p>
          <p className="text-gray-600">Trang chủ</p>
          <p className="text-gray-600">Giới thiệu</p>
          <p className="text-gray-600">Tour du lịch</p>
          <p className="text-gray-600">Tin tức</p>
          <p className="text-gray-600">Faqs</p>
          <p className="text-gray-600">Liên hệ</p>
        </div>

        <div className="md:flex hidden flex-col gap-3 ">
          <p className="font-bold text-lg">Thông tin cần biết</p>
          <p className="text-gray-600">Về chúng tôi</p>
          <p className="text-gray-600">Câu hỏi thường gặp</p>
          <p className="text-gray-600">Điều kiện, điều khoản</p>
          <p className="text-gray-600">Quy chế hoạt động</p>
          <p className="text-gray-600">Liên hệ</p>
        </div>

        <div className="md:flex hidden flex-col gap-10 ">
          <div>
            <p className="font-bold text-lg uppercase mb-2">Kết nốI</p>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              <FontAwesomeIcon icon={faYoutube} size="2xl" />
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
              <FontAwesomeIcon icon={faGoogle} size="2xl" />
            </div>
          </div>
          <div>
            <p className="font-bold text-lg uppercase mb-2">Tải ứng dụng</p>
            <div className="flex gap-2">
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img-app-store.png?1728351987196" alt="" />
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img-google-play.png?1728351987196" alt="" />
            </div>
          </div>
          <div>
            <p className="font-bold text-lg uppercase">Phương thức thanh toán</p>
            <div className="flex gap-2">
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_1.png?1728351987196" alt="" />
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_2.png?1728351987196" alt="" />
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_3.png?1728351987196" alt="" />
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_4.png?1728351987196" alt="" />
              <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_payment_5.png?1728351987196" alt="" />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Footer