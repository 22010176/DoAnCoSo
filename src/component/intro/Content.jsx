function Paragraph({ title, children }) {
  return (
    <div className="text-lg">
      <p className=" font-bold text-nowrap text-xl border-b-2 pr-5 w-fit mb-2">{title}</p>
      {children}
      {/* <p>
        Được thành lập từ năm 2010, ChillTravel là một trong những Công ty du lịch uy tín hàng đầu Việt Nam, cung cấp dịch vụ đặt phòng khách sạn, đặt vé máy bay, tour du lịch cho khách trong nước và Quốc tế.
      </p>
      <img className="w-120 h-auto mx-auto" src="\assets\imgs\logo.jpg" alt />
      <p>Với mục tiêu cung cấp dịch vụ du lịch chất lượng, tin cậy với giá tốt nhất,  ChillTravel liên kết chọn lọc với các khách sạn, các hãng hàng không và các đối tác uy tín địa phương nhằm cung cấp đa dạng các dịch vụ, được kết hợp thông minh và tối ưu cho phép khách hàng đặt những chuyến đi hoàn hảo với giá tốt nhất.</p> */}
    </div>
  )
}

function Content() {
  return (
    <>
      <p className="text-3xl font-bold">Giới thiệu về ChillTravel</p>
      <Paragraph title="Chúng tôi là ChillTravel">
        Được thành lập từ năm 2010, ChillTravel là một trong những Công ty du lịch uy tín hàng đầu Việt Nam, cung cấp dịch vụ đặt phòng khách sạn, đặt vé máy bay, tour du lịch cho khách trong nước và Quốc tế.
        <img className="w-120 h-auto mx-auto" src="\assets\imgs\logo.jpg" alt="" />
        Với mục tiêu cung cấp dịch vụ du lịch chất lượng, tin cậy với giá tốt nhất,  ChillTravel liên kết chọn lọc với các khách sạn, các hãng hàng không và các đối tác uy tín địa phương nhằm cung cấp đa dạng các dịch vụ, được kết hợp thông minh và tối ưu cho phép khách hàng đặt những chuyến đi hoàn hảo với giá tốt nhất.
      </Paragraph>

      <Paragraph title="Tầm nhìn">
        Được thành lập từ năm 2010, ChillTravel là một trong những Công ty du lịch uy tín hàng đầu Việt Nam, cung cấp dịch vụ đặt phòng khách sạn, đặt vé máy bay, tour du lịch cho khách trong nước và Quốc tế.
      </Paragraph>

      <Paragraph title="Dịch vụ cung cấp">
        Với mục tiêu tiết kiệm tối đa chi phí và thời gian cho khách hàng để lên kế hoạch và đặt dịch vụ cho một chuyến đi, ND Travel cung cấp đa dạng các dịch vụ du lịch, được kết hợp thông minh và tối ưu:
      </Paragraph>
    </>
  )
}

export default Content