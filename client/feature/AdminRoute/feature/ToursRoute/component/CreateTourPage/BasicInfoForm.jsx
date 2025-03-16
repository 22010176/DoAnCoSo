import { Button, Input, Upload } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useContext } from "react"

import TourContext from "./CreateTourContext"

function BasicInfoForm() {
  const [state, dispatch] = useContext(TourContext)

  function onChange(e) {
    const elem = e.target

    dispatch({
      type: "updateInput",
      payload: {
        name: elem.name,
        value: elem.value
      }
    })
  }

  function onUploadPicture(e) {
    dispatch({
      type: "updateImage",
      payload: e
    })
  }
  console.log(state)

  return (
    <div className="flex gap-5">
      <div className="text-nowrap w-80">
        <p className="text-xl font-bold mb-3">Ảnh minh họa</p>
        <Upload fileList={state?.images} onChange={onUploadPicture} maxCount="5" beforeUpload={() => false} listType="picture" defaultFileList={[]}>
          <Button type="primary" >
            Upload
          </Button>
        </Upload>
      </div>

      <div className="grow grid grid-cols-3 gap-10 border-l border-gray-300 px-5">
        <div className="col-span-2">
          <label className="text-lg font-semibold">Tên tour </label>
          <Input name="tenTour" value={state?.tenTour} onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Số ngày  </label>
          <Input name="soNgay" value={state?.soNgay} type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Khởi hành </label>
          <Input value={state?.xuatPhat} name="xuatPhat" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Điểm đến</label>
          <Input value={state?.diemDen} name="diemDen" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Di chuyển bằng</label>
          <Input value={state?.phuongTien} name="phuongTien" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé người lớn </label>
          <Input value={state?.giaNguoiLon} name="giaNguoiLon" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé trẻ em</label>
          <Input value={state?.giaTreEm} name="giaTreEm" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé em bé </label>
          <Input value={state?.giaEmBe} name="giaEmBe" type="number" onChange={onChange} />
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Mô tả</label>
          <TextArea name="moTa" value={state?.moTa} showCount maxLength={1024} autoSize={{ maxRows: 10, minRows: 10 }} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfoForm