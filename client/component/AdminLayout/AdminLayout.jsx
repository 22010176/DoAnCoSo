import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function AdminLayout() {

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

export default AdminLayout