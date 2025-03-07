import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "antd";

function TourDetail({ items }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="relative w-full">
          <img className="rounded-xl w-full" src="https://bizweb.dktcdn.net/100/505/645/products/sp2-2-c0d19e8d-52ad-4dad-a83c-486789e756b7.jpg?v=1703428506507" alt="" />
          <div className="absolute right-2 bottom-2 bg-black/50 size-12 rounded-2xl text-white flex justify-center items-center"><FontAwesomeIcon icon={faHeart} /></div>
        </div>
        <div className="grid grid-cols-5 gap-5">
          <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-04d95c8f-9688-4cbc-a200-dbfa6a9c5e12.jpg?v=1703428504240" alt="" /></div>
          <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-5-1d784c9b-172a-4d70-992b-1f25ba0b0c56.jpg?v=1703428505093" alt="" /></div>
          <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
          <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
          <div className="rounded-xl p-2 border border-gray-200 hover:border-blue-500"><img className="rounded-lg " src="https://bizweb.dktcdn.net/thumb/medium/100/505/645/products/sp2-4-db7a10fb-6731-4d0d-9202-5592a4ced3b4.jpg?v=1703428505793" alt="" /></div>
        </div>
      </div>
      <Tabs className="shadow-xl rounded-b-xl" type="card" defaultActiveKey="1" items={items} />
    </div>

  )
}

export default TourDetail