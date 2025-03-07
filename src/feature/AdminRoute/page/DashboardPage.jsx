import { List } from "antd";

function DashboardPage() {

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      {/* sidebar */}
      <div className="h-full w-1/7 bg-green-600 text-white">
        <div className="flex flex-col gap-5 items-center py-5 mx-5 border-b border-white">
          <img className="rounded-full size-30" src="\assets\imgs\bg.jpg" alt="" />
          <p className="text-xl font-bold">User</p>
        </div>

        <List>

        </List>
      </div>

      {/* main content */}
      <div className="h-full grow bg-black">

      </div>
    </div>
  );
}

export default DashboardPage