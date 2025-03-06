import { Badge } from "antd"

function TourOrder() {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-5 items-center">
        <Badge color="blue" className="h-full " count="5">
          <img className="rounded min-w-30 size-full object-cover" src="https://bizweb.dktcdn.net/thumb/thumb/100/505/645/products/sp4-2b8e7737-fc0e-4787-8148-a6965456e80f.jpg?v=1703216777473" alt="" />
        </Badge>
        <div>
          <p className="font-semibold">Tour Lặn Biển 1 Ngày: Khám Phá Vịnh Nha Trang</p>
          <p className="text-sm text-gray-500">Ngày đi: 18/03/2025</p>
        </div>
      </div>
      <p className="xl:text-lg text-gray-800 font-semibold">5.000.000₫</p>
    </div>
  )
}

export default TourOrder