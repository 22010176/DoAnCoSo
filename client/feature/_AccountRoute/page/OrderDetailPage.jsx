function OrderDetailPage() {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-xl font-medium">Chi tiết đơn hàng #1041</h1>
        <p className="text-gray-600">Ngày tạo: 08/03/2025</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center">
          <span className="mr-2">Trạng thái thanh toán:</span>
          <span className="text-orange-500 font-medium">Chưa thanh toán</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Trạng thái vận chuyển:</span>
          <span className="text-red-500 font-medium italic">Chưa giao hàng</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Mã vận đơn:</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-3">ĐỊA CHỈ GIAO HÀNG</h2>
          <p className="font-medium">A B</p>
          <p className="text-gray-700">Địa chỉ: , Quận Đống Đa, Hà Nội</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-3">THANH TOÁN</h2>
          <p>Chuyển khoản</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-3">GHI CHÚ</h2>
          <p className="text-gray-700">Không có ghi chú</p>
        </div>
      </div>

      <div className="border rounded mb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 w-1/2">Sản phẩm</th>
              <th className="text-right p-4">Đơn giá</th>
              <th className="text-center p-4">Số lượng</th>
              <th className="text-right p-4">Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <div className="flex">
                  <div className="w-20 h-16 mr-4 flex-shrink-0">
                    <img src="/api/placeholder/80/64" alt="Tour" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">Tour Lặn Biển 1 Ngày: Khám Phá Vịnh Nha Trang</p>
                    <p className="text-gray-600">Người lớn</p>
                    <p className="text-gray-600 text-sm">Mã sản phẩm: ND010</p>
                  </div>
                </div>
              </td>
              <td className="text-right p-4">1.000.000₫</td>
              <td className="text-center p-4">5</td>
              <td className="text-right p-4 font-medium">5.000.000₫</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                <div className="flex">
                  <div className="w-20 h-16 mr-4 flex-shrink-0">
                    <img src="/api/placeholder/80/64" alt="Tour" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</p>
                    <p className="text-gray-600">Người lớn</p>
                    <p className="text-gray-600 text-sm">Mã sản phẩm: ND006</p>
                  </div>
                </div>
              </td>
              <td className="text-right p-4">15.000.000₫</td>
              <td className="text-center p-4">1</td>
              <td className="text-right p-4 font-medium">15.000.000₫</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                <div className="flex">
                  <div className="w-20 h-16 mr-4 flex-shrink-0">
                    <img src="/api/placeholder/80/64" alt="Tour" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">Du lịch Nha Trang - VinWonders Nha Trang - Hòn Mun 3N2Đ</p>
                    <p className="text-gray-600">Người lớn</p>
                    <p className="text-gray-600 text-sm">Mã sản phẩm: ND025</p>
                  </div>
                </div>
              </td>
              <td className="text-right p-4">6.500.000₫</td>
              <td className="text-center p-4">1</td>
              <td className="text-right p-4 font-medium">6.500.000₫</td>
            </tr>
          </tbody>
        </table>

        <div className="p-4 border-t">
          <div className="ml-auto w-full sm:w-1/2 md:w-1/3">
            <div className="flex justify-between py-2">
              <span>Phí vận chuyển</span>
              <span>40.000₫ (Giao hàng tận nơi)</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Tổng tiền</span>
              <span className="text-red-600">26.540.000₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPage