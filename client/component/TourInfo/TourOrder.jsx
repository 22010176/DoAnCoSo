import { Badge } from "antd"

function TourOrder({ image, title, date, price, number }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-5 items-center">
        <Badge color="blue" className="h-full " count={number}>
          <img className="rounded w-25 size-full object-cover" src={image} alt="" />
        </Badge>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">Ngày đi: {date}</p>
        </div>
      </div>
      <p className="xl:text-lg text-gray-800 font-semibold">{price}đ</p>
    </div>
  )
}

export default TourOrder