import Container from "@admin/component/Container"
import Header from "@admin/component/Header"

function OrderDetailPage() {
  return (
    <>
      <Header>Quản lý đơn hàng / ĐH H1234</Header>
      <Container>
        <div className="flex justify-between mb-4">
          <button className="flex items-center text-blue-500 px-4 py-2 border border-blue-500 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">Xuất Excel</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">Xuất PDF</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span>Đơn hàng: </span>
                  <span className="text-blue-600 font-medium">H1234</span>
                </div>
                <div className="flex items-center">
                  <div className="px-4 py-2 bg-green-200 text-green-800 rounded-md flex items-center">
                    Đã giao hàng
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span>24/02/2022 - 23: 04</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-md">
                <div className="bg-gray-100 p-3 font-medium border-b">
                  Khách hàng
                </div>
                <div className="p-3">
                  <div className="font-medium">Mạnh Mạnh</div>
                  <div>0333.333.333</div>
                  <div className="text-gray-600">manhh@gmail.com</div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="bg-gray-100 p-3 font-medium border-b">
                  Người nhận
                </div>
                <div className="p-3">
                  <div className="font-medium">Triệu Lệ Mạnh</div>
                  <div>0333.333.333</div>
                  <div className="text-gray-600">
                    Số nhà 6, Ngõ 60, La Tinh 2, Đông La, Hoài Đức, Hà Nội
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-md">
              <div className="grid grid-cols-12 bg-gray-100 p-3 font-medium border-b">
                <div className="col-span-4">Tên sản phẩm</div>
                <div className="col-span-2 text-center">Số lượng</div>
                <div className="col-span-3 text-center">Đơn giá</div>
                <div className="col-span-3 text-center">Thành tiền</div>
              </div>
              <div>
                <div className="grid grid-cols-12 p-3 border-b">
                  <div className="col-span-4">
                    <div>Vé người lớn tour Nha Trang - Vinpearl...</div>
                    <div className="text-gray-500 text-sm">Mã tour: NT12345</div>
                  </div>
                  <div className="col-span-2 text-center">02</div>
                  <div className="col-span-3 text-center">1.000.000</div>
                  <div className="col-span-3 text-center">2.000.000</div>
                </div>
                <div className="grid grid-cols-12 p-3">
                  <div className="col-span-4">
                    <div>Vé trẻ em tour Nha Trang - Vinpearl...</div>
                    <div className="text-gray-500 text-sm">Mã tour: NT12345</div>
                  </div>
                  <div className="col-span-2 text-center">01</div>
                  <div className="col-span-3 text-center">800.000</div>
                  <div className="col-span-3 text-center">800.000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border rounded-md mb-4">
              <div className="bg-gray-100 p-3 font-medium border-b">
                Thanh toán
              </div>
              <div className="p-3">
                <div className="flex justify-between py-1">
                  <div>Tạm tính</div>
                  <div className="font-medium">2.800.000</div>
                </div>
                <div className="flex justify-between py-1">
                  <div>Mã giảm giá</div>
                  <div className="flex items-center">
                    <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded mr-2">Giảm 10%</span>
                    <span className="text-red-500">-280.000</span>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>Phí vận chuyển</div>
                  <div className="text-green-500">Miễn phí</div>
                </div>
                <div className="flex justify-between py-1">
                  <div>Thành tiền</div>
                  <div className="font-medium">2.520.000</div>
                </div>
                <div className="flex justify-between py-1">
                  <div>Phương thức thanh toán</div>
                  <div>Chuyển khoản</div>
                </div>
              </div>
            </div>

            <div className="border rounded-md mb-4">
              <div className="p-3 border-b flex justify-between items-center">
                <div>
                  <div>Cần thanh toán</div>
                  <div className="text-sm text-gray-500">(2 sản phẩm)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-500">2.520.000</div>
                  <div className="text-sm text-gray-500 text-right">(Đã bao gồm VAT)</div>
                </div>
              </div>
            </div>

            <div className="border rounded-md">
              <div className="bg-gray-100 p-3 font-medium border-b">
                Ghi chú
              </div>
              <div className="p-3">
                Giao hàng vào buổi sáng
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default OrderDetailPage