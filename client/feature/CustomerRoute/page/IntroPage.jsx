import { faEarthAsia, faHotel, faMapLocationDot, faPassport, faPlaneDeparture, faSailboat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Container from "component/Container";
import Header from "component/Header";

import Content from '../component/IntroPage/Content';
import ServiceProvide from "../component/IntroPage/ServiceProvider";

const items = [
  { title: <Link style={{ color: "white" }} className="text-xl font-semibold" to="/">Trang chủ</Link>, },
  { title: <p className="text-white font-bold text-xl">Giới thiệu</p>, }
]

function IntroPage() {
  return (
    <div className="mb-20 flex flex-col gap-10">
      <Header Element={Container} items={items} />

      <Container className="flex flex-col gap-10">
        <Content />
      </Container>

      <Container className="lg:grid-cols-3 md:grid-cols-2 grid md:gap-20 gap-10 my-10">
        <ServiceProvide icon={faMapLocationDot} title="DU LỊCH TRONG NƯỚC" content="Cung cấp đa dạng các tour du dịch ghép khách lẻ theo nhóm hoặc thiết kế theo yêu cầu cho khách đoàn trên các tuyến điểm tại Việt Nam." />
        <ServiceProvide icon={faEarthAsia} title="DU LỊCH QUỐC TẾ" content="Chúng tôi luôn tự tin đem đến cho du khách Việt Nam những chuyến đi tuyệt vời để khám phá mọi miền đất mới như Thái, Malaysia, Singapore, Trung Quốc, Nhật Bản, Hàn Quốc, Châu Âu, Châu Úc, Châu Mỹ..." />
        <ServiceProvide icon={faPlaneDeparture} title="ĐẶT VÉ MÁY BAY" content="Tiện ích với dịch vụ đặt chỗ & thanh toán trực tuyến cho vé máy bay của các hãng hàng không nội địa và quốc tế, những chuyến đi sẽ trở nên thật dễ dàng, nhanh chóng, cùng dịch vụ chăm sóc chuyên nghiệp." />
        <ServiceProvide icon={faHotel} title="ĐẶT PHÒNG KHÁCH SẠN" content="Hài lòng khách hàng với dịch vụ đặt phòng trực tuyến tại tất cả các điểm đến ở Việt Nam, Lào, Campuchia,Thái Lan và Myanmar với lựa chọn đa dạng và chất lượng đảm bảo." />
        <ServiceProvide icon={faSailboat} title="DU LỊCH DU THUYỀN" content="Cung cấp các dịch vụ đặt tour du thuyền giá tốt nhất từ ngắn ngày đi thăm Vịnh Hạ Long cho tới các tour du thuyền dài ngày cùng trải nghiệm xa hoa xuyên quốc gia trên sông Mekong tại Việt Nam, Lào, Campuchia, Thái Lan và Myanmar." />
        <ServiceProvide icon={faPassport} title="VÉ TÀU, VÉ XE, VISA" content="Đáp ứng các dịch vụ Visa, vé tàu và thuê xe du lịch nhanh chóng và tin cậy. ND Travel cam kết hỗ trợ khách hàng trong mọi thời điểm." />
      </Container>
    </div>
  )
}

export default IntroPage