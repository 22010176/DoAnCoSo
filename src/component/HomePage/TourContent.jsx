import { faArrowRight, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import TourInfoVertical from "../TourInfo/TourVertical";

export function GoodTour() {
  return (
    <div className="xl:px-50 px-5 py-10 flex flex-col gap-8">
      <div className="md:flex justify-between items-center">
        <div className="leading-10">
          <p className="text-4xl font-bold hover:text-blue-500">Tour giá tốt</p>
          <p className="text-gray-600">Hơn 1.000 tour đa dạng giá hời có hạn</p>
        </div>
        <Link className="flex items-center gap-2 text-blue-500 text-lg" >
          Xem thêm
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      <div className="flex overflow-x-auto gap-5">
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
      </div>
    </div>
  )
}

export function CountryTour() {
  return (
    <div className="xl:px-50 px-5 py-10 flex flex-col gap-8">
      <div className="md:flex justify-between items-center">
        <div className="leading-10">
          <p className="text-4xl font-bold hover:text-blue-500">Tour trong nước</p>
          <p className="text-gray-600">Hơn 1.000 tour đa dạng giá hời có hạn</p>
        </div>
        <div className="flex gap-3">
          <Button color="blue" variant="solid">Phú Quốc</Button>
          <Button color="blue" variant="filled">Nha Trang</Button>
          <Button color="blue" variant="filled">Đà Nẵng</Button>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-5">
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
      </div>

      <Button size="large" className="w-100 mx-auto" color="blue" variant="filled">Xem tất cả</Button>
    </div>
  )
}

export function GlobalTour() {
  return (
    <div className="xl:px-50 px-5 py-10 flex flex-col gap-8">
      <div className="md:flex justify-between items-center">
        <div className="leading-10">
          <p className="text-4xl font-bold hover:text-blue-500">Tour nước ngoài</p>
          <p className="text-gray-600">Hơn 1.000 tour đa dạng giá hời có hạn</p>
        </div>
        <div className="flex gap-3">
          <Button color="blue" variant="solid">Hàn Quốc</Button>
          <Button color="blue" variant="filled">Trung Quốc</Button>
          <Button color="blue" variant="filled">Thái Lan</Button>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-5">
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
      </div>

      <Button size="large" className="w-100 mx-auto" color="blue" variant="filled">Xem tất cả</Button>
    </div>
  )
}