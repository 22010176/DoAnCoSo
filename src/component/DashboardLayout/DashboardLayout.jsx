import { faArrowRightToBracket, faBox, faFileInvoice, faFileInvoiceDollar, faGlobe, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, List } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const data = [
  { icon: faBox, text: "Bảng điều khiển" },
  { icon: faUser, text: "Quản lý khách hàng" },
  { icon: faGlobe, text: "Quản lý tour du lịch" },
  { icon: faFileInvoice, text: "Quản lý đơn hàng" },
  { icon: faFileInvoiceDollar, text: "Báo cáo doanh thu" },
]
function DashboardLayout() {

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      {/* sidebar */}
      <Sidebar />

      {/* main content */}
      <div className="h-full grow bg-gray-200 flex flex-col p-5 gap-5">
        <Header>Trang chủ</Header>

        <div className="bg-white grow rounded-xl shadow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout