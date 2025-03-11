import { faArrowRightToBracket, faBox, faFileInvoice, faFileInvoiceDollar, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  { icon: faBox, text: "Bảng điều khiển" },
  { icon: faUser, text: "Quản lý khách hàng" },
  { icon: faGlobe, text: "Quản lý tour du lịch" },
  { icon: faFileInvoice, text: "Quản lý đơn hàng" },
  { icon: faFileInvoiceDollar, text: "Báo cáo doanh thu" },
]

function Sidebar() {
  return (
    <div className="h-full md:w-70 bg-green-700 text-white flex flex-col relative">
      <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center py-5 mx-5 border-b border-white">
        <img className="rounded-full md:size-18 size-15" src="\assets\imgs\bg.jpg" alt="" />
        <p className="md:text-2xl sm:block hidden text-xl font-bold">User</p>
      </div>

      <div className="flex flex-col gap-5 m-5 grow">
        {data.map((item, j) => (

          <div key={j} className="rounded-xl hover:bg-gray-50/10 px-4 py-3 items-center grid md:grid-cols-[auto_1fr] gap-3 text-white">
            <FontAwesomeIcon icon={item.icon} className="text-2xl w-8" />
            <p className="md:block hidden text-nowrap font-semibold">{item.text}</p>
          </div>
        ))}
      </div>

      <button color="green" variant="text" className="text-white flex gap-5 items-center md:justify-start justify-center p-5 bg-green-700 hover:bg-green-800/50">
        <FontAwesomeIcon flip="horizontal" icon={faArrowRightToBracket} className="text-2xl" />
        <p className="text-xl md:block hidden font-semibold text-nowrap">Đăng xuất</p>
      </button>
    </div>
  )
}

export default Sidebar