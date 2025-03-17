import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useContext } from "react"

import { TourResource } from "@/Api"
import TourContext from "./CreateTourContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTractor, faTrash } from "@fortawesome/free-solid-svg-icons"

function BasicInfoForm() {
  const [state, dispatch] = useContext(TourContext)

  function onChange(e) {
    const elem = e.target
    const { name, value } = elem

    dispatch({
      type: "updateInput",
      payload: { name, value }
    })
  }

  async function onUploadPicture(e) {
    const data = new FormData()
    data.append('image', e.target.files[0])

    const result = await TourResource.post('upload-image', data).then(res => res.data)

    if (!result.success) return;
    dispatch({ type: "updateImage", payload: result.data })
  }

  console.log(state)

  return (
    <div className="flex gap-5">
      <div className="text-nowrap w-80">
        <p className="text-xl font-bold">Ảnh minh họa</p>
        <div className="my-5">
          <label htmlFor="image-input" className="p-2 rounded text-white shadow bg-blue-400">
            Tải ảnh
          </label>
          <input accept="image/*" onChange={onUploadPicture} id="image-input" type="file" className="hidden" multiple />
        </div>
        {state?.images?.map((i, j) => {
          function onClick() {
            dispatch({ type: 'deleteImage', payload: i })
          }

          return (
            <div key={j} className="grid border-b pb-1 grid-cols-[1fr_auto] gap-2 items-center mb-2">
              <img className="max-h-20 w-auto" key={j} src={i} alt="" />
              <Button onClick={onClick} size="small" color="red" variant="outlined">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          )
        })}
        <div className="flex flex-cols gap-5">
        </div>
      </div>

      <div className="grow grid grid-cols-3 gap-10 border-l border-gray-300 px-5">
        <div className="col-span-3">
          <label className="text-lg font-semibold">Tên tour </label>
          <Input name="tenTour" value={state?.info?.tenTour} onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Khởi hành </label>
          <Input value={state?.info?.xuatPhat} name="xuatPhat" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Điểm đến</label>
          <Input value={state?.info?.diemDen} name="diemDen" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Di chuyển bằng</label>
          <Input value={state?.info?.phuongTien} name="phuongTien" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé người lớn </label>
          <Input value={state?.info?.giaNguoiLon} name="giaNguoiLon" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé trẻ em</label>
          <Input value={state?.info?.giaTreEm} name="giaTreEm" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé em bé </label>
          <Input value={state?.info?.giaEmBe} name="giaEmBe" type="number" onChange={onChange} />
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Mô tả</label>
          <TextArea name="moTa" value={state?.info?.moTa} showCount maxLength={1024} autoSize={{ maxRows: 6, minRows: 6 }} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfoForm