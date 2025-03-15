function CreateTourPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      {/* Header buttons */}
      <div className="flex gap-2 mb-4">
        <button className="flex items-center text-blue-500 px-4 py-2 border border-blue-500 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại
        </button>
        <button className="flex items-center text-blue-500 px-4 py-2 border border-blue-500 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          Lưu
        </button>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        <div className="px-6 py-2 bg-green-100 border-t border-l border-r rounded-t-md font-medium text-green-800">
          Thông tin cơ bản
        </div>
        <div className="px-6 py-2 bg-green-600 text-white border-t border-l border-r rounded-t-md font-medium">
          Lịch trình
        </div>
        <div className="px-6 py-2 bg-green-100 border-t border-l border-r rounded-t-md font-medium text-green-800">
          Đơn hàng
        </div>
      </div>

      {/* Content */}
      <div className="border rounded-lg p-6">
        <div className="mb-6">
          <h2 className="font-medium">Ngày 1</h2>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Tiêu đề</label>
          <input
            type="text"
            className="w-56 border rounded p-2"
            value="HCM - Nha Trang"
            readOnly
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Lịch trình</label>
          <div className="border rounded p-4">
            <p>Xe và HDV đón khách tại sân bay Cam Ranh hoặc bến xe, ga. Quý khách dùng cơm trưa tại nhà hàng và về khách sạn nghỉ ngơi.</p>
            <p>Buổi chiều</p>
            <p>Quý khách có thể lựa chọn 1 trong 2 chương trình sau:</p>
            <p>Chương trình 1: Đi VinWonders chi phí tự túc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTourPage