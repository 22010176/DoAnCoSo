import { useContext } from "react"

import TextArea from "antd/es/input/TextArea"
import TourDetailsContext from "./TourDetailsContext"

function BasicInfo() {
  const [state] = useContext(TourDetailsContext)

  return (
    <div className="flex gap-5">
      <div className="text-nowrap w-80">
        <p className="text-xl mb-2 font-bold">Ảnh minh họa</p>
        {state?.images?.map((i, j) => (
          <img className="mb-2 h-25 w-auto" key={j} src={i.hinhAnh} id={i.id} />
        ))}
      </div>

      <div className="grow grid grid-cols-3 gap-10 border-l border-gray-300 px-5">
        <div className="col-span-1">
          <label className="text-lg font-semibold">Ngày tạo</label>
          <p disabled >
            {new Date(state?.info?.ngayTao).toLocaleString()}
          </p>
        </div>
        <div className="col-span-1">
          <label className="text-lg font-semibold">Trạng thái</label>
          <p disabled >
            {state?.info.tenTrangThai}
          </p>
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Tên tour </label>
          <p disabled >
            {state?.info.tenTour}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Khởi hành </label>
          <p disabled >
            {state?.info?.xuatPhat}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Điểm đến</label>
          <p disabled >
            {state?.info?.diemDen}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Di chuyển bằng</label>
          <p disabled >
            {state?.info?.tenPhuongTien}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Vé người lớn </label>
          <p disabled >
            {state?.info?.giaNguoiLon}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Vé trẻ em</label>
          <p disabled >
            {state?.info?.giaTreEm}
          </p>
        </div>
        <div >
          <label className="text-lg font-semibold">Vé em bé </label>
          <p disabled >
            {state?.info?.giaEmBe}
          </p>
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Mô tả</label>
          <TextArea value={state?.info?.moTa} autoSize={{ maxRows: 8, minRows: 8 }} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfo