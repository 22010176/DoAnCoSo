import { Input, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { GetResource, TourResource } from "@/Api"
import ImageInput from "../ImageInput"
import TourContext from "./CreateTourContext"

function BasicInfoForm() {
  const location = useLocation()
  const [state, dispatch] = useContext(TourContext)
  const [vehicle, setVehicle] = useState([])

  useEffect(function () {
    GetResource.get('/phuong-tien')
      .then(res => res.data)
      .then(data => {
        setVehicle(data.data.map(({ id, tenPhuongTien }) => ({
          value: id,
          label: tenPhuongTien,
          name: 'phuongTien'
        })))
      })
  }, [location])

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
        {state?.images?.map((i, j) => (
          <ImageInput key={j} src={i} onClick={e => dispatch({ type: 'deleteImage', payload: i })} />
        ))}
      </div>

      <div className="grow grid grid-cols-3 gap-10 border-l border-gray-300 px-5">
        <div className="col-span-3">
          <label className="text-lg font-semibold">Tên tour </label>
          <Input required name="tenTour" value={state?.info?.tenTour} onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Khởi hành </label>
          <Input required value={state?.info?.xuatPhat} name="xuatPhat" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Điểm đến</label>
          <Input required value={state?.info?.diemDen} name="diemDen" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Di chuyển bằng</label>
          <Select required name="phuongTien" value={state?.info?.phuongTien} className="w-full" options={vehicle} onChange={e => {
            dispatch({ type: "updateInput", payload: { name: "phuongTien", value: e } })
          }} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé người lớn </label>
          <Input required value={state?.info?.giaNguoiLon} name="giaNguoiLon" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé trẻ em</label>
          <Input required value={state?.info?.giaTreEm} name="giaTreEm" type="number" onChange={onChange} />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé em bé </label>
          <Input required value={state?.info?.giaEmBe} name="giaEmBe" type="number" onChange={onChange} />
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Mô tả</label>
          <TextArea required name="moTa" value={state?.info?.moTa} showCount maxLength={1024} autoSize={{ maxRows: 6, minRows: 6 }} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfoForm