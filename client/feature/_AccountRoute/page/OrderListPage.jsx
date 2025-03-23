import { Link } from "react-router-dom";

function OrderListPage() {
  const orders = [
    {
      id: '#1041',
      date: '08/03/2025',
      address: 'Quận Đống Đa, Hà Nội, Vietnam',
      value: '26.540.000₫',
      paymentStatus: 'Chưa thanh toán',
      deliveryStatus: 'Chưa chuyển'
    },
    {
      id: '#1041',
      date: '08/03/2025',
      address: 'Quận Đống Đa, Hà Nội, Vietnam',
      value: '26.540.000₫',
      paymentStatus: 'Chưa thanh toán',
      deliveryStatus: 'Chưa chuyển'
    },
    {
      id: '#1041',
      date: '08/03/2025',
      address: 'Quận Đống Đa, Hà Nội, Vietnam',
      value: '26.540.000₫',
      paymentStatus: 'Chưa thanh toán',
      deliveryStatus: 'Chưa chuyển'
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ĐƠN HÀNG CỦA BẠN</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="p-3 text-center border border-green-700">Đơn hàng</th>
              <th className="p-3 text-center border border-green-700">Ngày</th>
              <th className="p-3 text-center border border-green-700">Địa chỉ</th>
              <th className="p-3 text-center border border-green-700">Giá trị đơn hàng</th>
              <th className="p-3 text-center border border-green-700">TT thanh toán</th>
              <th className="p-3 text-center border border-green-700">TT vận chuyển</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-3 text-center border">
                  <Link to="/account/orders/2" className="text-green-500 font-medium">{order.id}</Link>
                </td>
                <td className="p-3 text-center border">{order.date}</td>
                <td className="p-3 border">{order.address}</td>
                <td className="p-3 text-right border">{order.value}</td>
                <td className="p-3 text-center border">
                  <span className="bg-orange-100 text-orange-800 text-nowrap px-2 py-1 rounded text-sm font-medium">
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="p-3 text-center border">
                  <span className="bg-blue-100 text-blue-800 text-nowrap px-2 py-1 rounded text-sm font-medium">
                    {order.deliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderListPage