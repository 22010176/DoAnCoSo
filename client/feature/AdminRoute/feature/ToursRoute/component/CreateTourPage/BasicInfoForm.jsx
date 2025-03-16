import { Button, Input, Upload } from "antd"
import TextArea from "antd/es/input/TextArea"

function BasicInfoForm() {
  return (
    <div className="flex gap-5">
      <div className="text-nowrap w-80">
        <p className="text-xl font-bold mb-3">Ảnh minh họa</p>
        <Upload maxCount="5" beforeUpload={() => false} listType="picture" defaultFileList={[]}>
          <Button type="primary" >
            Upload
          </Button>
        </Upload>
      </div>

      <div className="grow grid grid-cols-3 gap-10 border-l border-gray-300 px-5">
        <div className="col-span-2">
          <label className="text-lg font-semibold">Tên tour </label>
          <Input />
        </div>
        <div >
          <label className="text-lg font-semibold">Số ngày  </label>
          <Input type="number" />
        </div>
        <div >
          <label className="text-lg font-semibold">Khởi hành </label>
          <Input />
        </div>
        <div >
          <label className="text-lg font-semibold">Điểm đến</label>
          <Input />
        </div>
        <div >
          <label className="text-lg font-semibold">Di chuyển bằng</label>
          <Input />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé người lớn </label>
          <Input type="number" />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé trẻ em</label>
          <Input type="number" />
        </div>
        <div >
          <label className="text-lg font-semibold">Vé em bé </label>
          <Input type="number" />
        </div>
        <div className="col-span-3">
          <label className="text-lg font-semibold">Mô tả</label>
          <TextArea showCount autoSize={{ maxRows: 10, minRows: 10 }} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfoForm