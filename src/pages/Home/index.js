import { faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown, faAngleLeft, faArrowRight, faCaretRight, faCircleUser, faFax, faHeadset, faHeart, faLocationDot, faMagnifyingGlass, faMailBulk, faMapLocationDot, faPaperPlane, faPhone, faX } from "@fortawesome/free-solid-svg-icons"
import { height } from "@fortawesome/free-solid-svg-icons/fa0"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Affix, Button, Card, Divider, Input, Rate, Select } from "antd"

import Navbar from "../components/Navbar"
import Logo from "../components/Logo"
import Footer from "../components/Footer"

const loaiHinh = [
  { value: 'sinhThai', label: 'Sinh thái' },
  { value: 'vanHoa', label: 'Văn hóa' },
  { value: 'nghiDuong', label: 'Nghỉ dưỡng' },
  { value: 'giaiTri', label: 'Giải trí' },
  { value: 'theThao', label: 'Thể thao' },
  { value: 'khamPha', label: 'Khám phá' },
  { value: 'maoHiem', label: 'Mạo hiểm' },
]

const viTri = [
  { value: 'haNoi', label: 'Hà Nội' },
  { value: 'hoChiMinh', label: 'TP.Hồ Chí Minh' },
  { value: 'quangNinh', label: 'Quảng Ninh' },
  { value: 'mienTay', label: 'Miền Tây' },
  { value: 'mienNam', label: 'Miền Nam' },
  { value: 'mienTrung', label: 'Miền Trung' },
  { value: 'mienBac', label: 'Miền Bắc' },
]

const khoangCach = [
  { value: '200', label: '<200km' },
  { value: '100', label: '<100km' },
  { value: '50', label: '<50km' },
  { value: '20', label: '<20km' },
  { value: 'closest', label: 'Gần nhất' },
]

function LocationCard({ location = "", src = "", title = "" }) {
  return (
    <Card hoverable cover={
      <div className="relative">
        <div className="absolute flex items-center justify-center p-3 bg-pink-100 bottom-0 right-0">
          <FontAwesomeIcon icon={faHeart} color="black" />
        </div>
        <div className="absolute flex gap-2 items-center justify-center px-3 py-2 bg-pink-100 bottom-0 left-0">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="font-medium">{location || "Đà Lạt"}</p>
        </div>
        <img className="rounded-md" src={src || "imgs/bg.jpg"} />
      </div>
    }>
      <Card.Meta className="text-center" title={title || "test"} />
    </Card>
  )
}

function LocationCardv2({ location = "", src = "", title = "" }) {
  return (
    <Card hoverable cover={
      <div className="relative">
        <div className="absolute flex items-center justify-center p-3 bg-pink-100 bottom-0 right-0">
          <FontAwesomeIcon icon={faHeart} color="black" />
        </div>
        <img className="rounded-md" src={src || "imgs/bg.jpg"} />
      </div>
    }>
      <Card.Meta title={
        <div className="flex flex-col gap-2">
          <p>{title || "Đà Lạt"}</p>
          <div className="flex gap-5">
            <Rate allowHalf disabled size="sm" />
            <p className="text-gray-500 text-sm">444</p>
          </div>
        </div>
      } />
    </Card>
  )
}

function NewsCard() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <img src="./imgs/bg.jpg" className="rounded-2xl" />
      <div>
        <h2 className="text-xl font-bold">Du lịch Đà Lạt - Cẩm nang từ A đến Z (update mới nhất 2025)</h2>
        <p className="text-gray-600">Chợ Đà Lạt là một trong những khu chợ, nơi tập trung giao lưu buôn bán hàng hóa lớn nhất của người dân bản địa xứ sở sương mùa...</p>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full ">
        <div className="w-full h-auto">
          <img className="w-full object-cover" src="/imgs/bg.jpg" style={{ height: "500px" }} />
        </div>
        <div className="flex justify-around items-center m-auto relative -translate-y-3/5 w-4/5 h-25 rounded-2xl bg-white shadow-2xl border-3 border-cyan-500 ">
          <Select className="w-1/6" size="large" variant="filled" virtual placeholder="Loại hình" defaultValue={[]} options={loaiHinh} />
          <Select className="w-1/6" variant="filled" size="large" virtual placeholder="Vị trí" defaultValue={[]} options={viTri} />
          <Select className="w-1/6" variant="filled" size="large" virtual placeholder="Đánh giá" defaultValue={[]} options={new Array(5).fill().map((i, j) => ({ value: j, label: <>{j + 1}</> }))} />
          <Select className="w-1/6" variant="filled" size="large" placeholder="Khoảng cách" defaultValue={[]} options={khoangCach} />
          <Button size="large" variant="solid" color="cyan"> Gợi ý nhanh</Button>
        </div>

        <div className="w-4/5 m-auto mb-15">
          <h1 className="text-3xl font-bold mb-5">Các điểm đến phổ biến</h1>
          <div className="grid grid-cols-3 gap-5">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
        </div>

        <div className="w-4/5 m-auto mb-15">
          <div className="mb-5">
            <h1 className="text-3xl font-bold leading-10">Được đánh giá cao</h1>
            <h5 className="text-sm text-gray-600">Những trải nghiệm tuyệt vời nhất của các nhà lữ hành</h5>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <LocationCardv2 />
            <LocationCardv2 />
            <LocationCardv2 />
            <LocationCardv2 />
            <LocationCardv2 />
          </div>
        </div>

        <div className="w-4/5 h-90 m-auto mb-15  bg-gray-600">

        </div>

        <div className="w-19/20 m-auto mb-15 grid grid-cols-3 gap-2">
          <Card className="col-span-2" title={
            <div className="text-xl w-fit text-cyan-700 bg-cyan-100 px-4 py-1 rounded-lg">Cẩm nang du lịch</div>
          }>
            <div className="w-full h-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <img src="./imgs/bg.jpg" className="rounded-2xl" />
                <h2 className="text-xl font-bold">Du lịch Đà Lạt - Cẩm nang từ A đến Z (update mới nhất 2025)</h2>
                <p className="text-gray-600">Chợ Đà Lạt là một trong những khu chợ, nơi tập trung giao lưu buôn bán hàng hóa lớn nhất của người dân bản địa xứ sở sương mùa...</p>
                <a className="text-blue-400 text-xl">
                  Tìm hiểu thêm
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1 self-baseline" />
                </a>
              </div>

              <div className="flex flex-col gap-10">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
            </div>
          </Card>

          <Card className="" title={
            <div className="text-xl w-fit text-cyan-700 bg-cyan-100 px-4 py-1 rounded-lg">Tin tức</div>
          }>
            <div className="flex flex-col gap-10">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </Card>
        </div>

        <div className="w-19/20 m-auto mb-15 bg-blue-500 text-center p-10 text-white rounded-3xl">
          <h1 className="text-4xl font-bold mb-3">Theo dõi và cập nhật tin tức mới nhất</h1>
          <h3 className="text-2xl mb-15">
            Vinh hạnh của chúng tôi là đề xuất cho bạn những địa điểm du lịch tuyệt vời và đáng nhớ nhất.
            <br />
            Hãy bấm theo dõi ngay!
          </h3>
          <div className="bg-white w-1/3 rounded-2xl p-2 flex gap-2 m-auto items-center">
            <Input size="large" placeholder="Nhập email của bạn" variant="borderless" />
            <Button size="large" variant="solid" color="blue">Theo dõi</Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home