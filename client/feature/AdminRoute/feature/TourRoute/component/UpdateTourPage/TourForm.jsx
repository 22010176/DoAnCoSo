import { Input } from "antd"

function TourForm() {
  const images = []

  return (
    <div className='flex gap-5 overflow-hidden max-h-full'>
      <div className="w-100 flex flex-col gap-5 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Ảnh minh họa</h3>
        <button className="text-gray-500 hover:text-gray-700" >
          + Thêm ảnh minh họa
        </button>
        <div className="flex flex-col gap-4 mb-4 grow overflow-y-auto">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Tour image ${index + 1}`} className="w-full h-48 object-cover rounded" />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full" >
                🗑️
              </button>
            </div>
          ))}
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grow h-min">
        <div className="md:col-span-3">
          <label className="block mb-2 font-semibold">Tên tour</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Khởi hành</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Điểm đến</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Số ngày</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Di chuyển bằng</label>
          <select className="w-full p-2 border rounded"  >
            <option value="Máy bay">Máy bay</option>
            <option value="Xe khách">Xe khách</option>
            <option value="Tàu hỏa">Tàu hỏa</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Vé người lớn</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Vé trẻ em</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Vé em bé</label>
          <Input type="text" className="w-full p-2 border rounded" />
        </div>

        <div className="md:col-span-3">
          <label className="block mb-2 font-semibold">Mô tả</label>
          <textarea className="w-full p-2 border rounded h-32" />
        </div>


      </div>
    </div>
  )
}

export default TourForm