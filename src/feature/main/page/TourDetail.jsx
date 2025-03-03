import { faCalendar, faCalendarTimes, faClock, faLocationDot, faPlane, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumb, Button, Input, Rate, Tabs } from "antd"
import { Link } from "react-router-dom"
import Follow from "../component/Follow";


const items = [
  {
    key: '1',
    label: 'Mô tả',
    children: <p className="text-lg">
      Hàn Quốc - xứ sở Kim Chi, nơi luôn thu hút du khách ghé thăm bởi tất cả từ văn hóa, thiên nhiên cho đến ẩm thực. Và đảo Jeju là hòn đảo xinh đẹp mà ai cũng muốn đặt chân đến khi tối Hàn Quốc. Nơi đây hội tụ đủ tất cả những điều thu hút du khách, cảnh sắc thiên nhiên yên bình, ẩm thực có nét riêng độc đáo và những nơi hấp dẫn đang chờ du khách đến khám phá. Trong tour 5 ngày 4 đêm này, BestPrice đưa bạn đến với Hàn Quốc khám phá đảo Jeju.

      Tổng quan:

      Tham quan đỉnh Đầu Rồng - Youngdam Rock
      Khám phá con đường huyền bí Dokkaebi
      Thăm Khu du lịch Seongsan - viên ngọc giữa biển khơi
      Tìm hiểu văn hóa dân tộc Seongeup
      Điểm tham quan: Đỉnh núi Seongsan, Con đường ma quái Dokkaebi, Thác nước Cheonjiyeon, Làng dân tộc Seongeup
      Chủ đề: Mua sắm, Khám phá, Ẩm thực</p>,
  },
  {
    key: '2',
    label: 'Lịch trình',
    children: <p>

    </p>,
  },
  {
    key: '3',
    label: 'Vị trí',
    children: 'Content of Tab Pane 3',
  },
];
function TourDetail() {
  return (
    <>
      <div className="bg-blue-500 h-40 lg:px-80 2xl:px-100 flex items-center">
        <Breadcrumb
          items={[
            { title: <p className="text-white">Trang chủ</p>, },
            { title: <Link href=""><p className="text-white">Hàn Quốc</p> </Link>, },
            { title: <Link href=""><p className="text-white font-bold"> Hà Nội - Hàn Quốc - Đảo Jeju 5N4Đ: Khám phá hòn đảo ngọc giữa biển</p></Link>, },
          ]}
        />
      </div>

      <div className="flex flex-col lg:px-70 2xl:px-100  py-10 gap-3">
        <p className="text-3xl font-bold">Hà Nội - Hàn Quốc - Đảo Jeju 5N4Đ: Khám phá hòn đảo ngọc giữa biển</p>
        <Rate />
        <div className="flex gap-5 my-5">
          <div className="flex gap-2 items-center">
            <Button className="p-2" size="large" color="blue" variant="filled"><FontAwesomeIcon icon={faLocationDot} /></Button>
            <div>
              <p className="text-gray-500">Khởi hành từ</p>

              <p className="text-blue-500">Hà Nội</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="p-2" size="large" color="blue" variant="filled"><FontAwesomeIcon icon={faLocationDot} /></Button>
            <div>
              <p className="text-gray-500">Điểm đến</p>
              <p className="text-blue-500">Hàn Quốc</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="p-2" size="large" color="blue" variant="filled"><FontAwesomeIcon icon={faCalendarTimes} /></Button>
            <div>
              <p className="text-gray-500">Thời gian</p>
              <p className="text-blue-500">5N4Đ</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="p-2" size="large" color="blue" variant="filled"><FontAwesomeIcon icon={faUser} /></Button>
            <div>
              <p className="text-gray-500">Số chỗ còn nhận</p>
              <p className="text-blue-500">Còn chỗ</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="p-2" size="large" color="blue" variant="filled"><FontAwesomeIcon icon={faPlane} /></Button>
            <div>
              <p className="text-gray-500">Di chuyển bằng</p>
              <p className="text-blue-500">Máy bay</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4">
          <div className="flex-col flex gap-2">
            <img src="/imgs/jpg/bg.jpg" className="rounded-xl w-170 h-auto" />
            <div className="grid grid-cols-5 gap-4 w-150">
              <div className="rounded-xl border-blue-500 border-2 p-1">
                <img src="/imgs/jpg/bg.jpg" className="rounded-lg" />
              </div>
              <div className="rounded-xl border-blue-500 border-2 p-1">
                <img src="/imgs/jpg/bg.jpg" className="rounded-lg" />
              </div>
              <div className="rounded-xl border-blue-500 border-2 p-1">
                <img src="/imgs/jpg/bg.jpg" className="rounded-lg" />
              </div>
              <div className="rounded-xl border-blue-500 border-2 p-1">
                <img src="/imgs/jpg/bg.jpg" className="rounded-lg" />
              </div>
              <div className="rounded-xl border-blue-500 border-2 p-1">
                <img src="/imgs/jpg/bg.jpg" className="rounded-lg" />
              </div>
            </div>
          </div>

          <div className="bg-blue-100 rounded-2xl p-5">
            <div className="border-b-1 border-gray-300 py-3">
              <p className="text-4xl font-bold text-blue-500">15.000.000đ</p>
              <p className="flex gap-2 mt-2">
                <strong>Mã tour:</strong>
                ND022
              </p>
            </div>
            <div className="border-b-1 border-gray-300 py-3">
              <div className="flex gap-4 mt-2">
                <strong >Mã tour:</strong>
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-blue-400 rounded text-sm text-white">Giảm 50%</div>
                  <div className="p-2 bg-blue-400 rounded text-sm text-white">Giảm 50%</div>
                  <div className="p-2 bg-blue-400 rounded text-sm text-white">Giảm 50%</div>
                  <div className="p-2 bg-blue-400 rounded text-sm text-white">Giảm 50%</div>
                </div>
              </div>
            </div>

            <div className="py-3 flex flex-col gap-3 border-b-1 border-gray-300">
              <div className="flex gap-3">
                <Button size="large" color="blue" variant="solid"><FontAwesomeIcon icon={faCalendar} /></Button>
                <Input size="large" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold">Loại khách</p>
                <div className="grid w-full grid-cols-3 items-center gap-10">
                  <p className="text-nowrap">Người lớn</p>
                  <Input size="large" type="number" className="w-50" />
                  <p className="text-blue-500 font-semibold">15.000.00</p>
                </div>
                <div className="grid grid-cols-3 items-center gap-10">
                  <p className="text-nowrap">Trẻ em</p>
                  <Input size="large" type="number" className="w-50" />
                  <p className="text-blue-500 font-semibold">15.000.00</p>
                </div>
                <div className="grid grid-cols-3 items-center gap-10">
                  <p className="text-nowrap">Người lớn</p>
                  <Input size="large" type="number" className="w-50" />
                  <p className="text-blue-500 font-semibold">15.000.00</p>
                </div>

              </div>
            </div>

            <div className="flex justify-between mt-5">
              <p>Tổng tiền</p>
              <p className="text-2xl font-bold text-blue-500">15.000.000</p>

            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <Button size="large" color="blue" variant="solid">Đặt ngay</Button>
              <Button size="large" color="blue" variant="filled">Liên hệ tư vấn</Button>
            </div>

          </div>
        </div>
      </div>
      <div className="lg:mx-70 2xl:mx-100 shadow-lg p-4 rounded-2xl">
        <Tabs defaultActiveKey="1" items={items} />
      </div>

      <div className="lg:mx-70 2xl:mx-100 shadow-lg p-4 rounded-2xl my-5">
        <div class="border-b-2 border-gray-400 pb-3">
          <h2 className="text-2xl ">
            <a href="/han-quoc" title="Tour cùng loại">Tour cùng loại</a>
          </h2>
        </div>

        <div className="flex gap-3 mt-3">
          {new Array(4).fill().map((i, j) => (
            <div className="flex w-80 flex-col gap-3 p-3 rounded-2xl border border-gray-400" key={j}>
              <img src="/imgs/jpg/bg.jpg" className="w-80 h-auto" />
              <p className="text-sm text-gray-500 flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                Khởi hành từ Hà Nội
              </p>
              <p className="text-lg font-bold"> Hà Nội - Hàn Quốc - Đảo Jeju 5N4Đ: Khám phá hòn đảo ngọc giữa biển</p>
              <div><Rate /></div>
              <p className="text-blue-500 text-lg font-bold">16.000.000</p>
              <p className="text-sm text-gray-500 flex gap-2 items-center">
                <FontAwesomeIcon icon={faClock} />
                Thời gian: 5N4Đ
              </p>
            </div>
          ))}
        </div>
      </div>

      <Follow />
    </>
  )
}

export default TourDetail