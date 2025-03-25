import { LeftOutlined } from '@ant-design/icons';
import { Button, Input, Select, Table } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';

import Container from "@admin/component/Container";
import Header from "@admin/component/Header";
import { useEffect, useState } from 'react';
import { AdminOrders } from '@/Api';

const columns = [
  { title: 'Mã tour', dataIndex: 'id', key: 'quantity', align: 'center', width: '15%' },
  { title: 'Tên sản phẩm', dataIndex: "tenTour", key: 'name', width: '40%', },
  { title: 'Số lượng', dataIndex: 'soLuong', key: 'quantity', align: 'center', width: '15%' },
  { title: 'Thành tiền', dataIndex: 'thanhTien', key: 'total', align: 'right', width: '25%' }
];

const format = Intl.NumberFormat("vi")

const { Option } = Select;
function OrderDetailPage() {
  const location = useLocation()
  const { id } = useParams()

  const [data, setData] = useState({})
  const thanhTien = format.format(data.tours?.reduce((acc, i) => acc + i.thanhTien, 0))

  useEffect(function () {
    AdminOrders.get(`/${id}`)
      .then(res => res.data)
      .then(data => setData(data.data))
  }, [location])


  function onClick() {
    AdminOrders.get(`/${id}`)
      .then(res => res.data)
      .then(a => console.log(a.data))
  }

  return (
    <>
      <Header>Quản lý đơn hàng / ĐH H1234</Header>
      <Container>

        <div className="flex justify-between mb-4">
          <Link to="/dashboard/orders">
            <Button type="primary" icon={<LeftOutlined />} className="text-blue-500 border-blue-500 bg-white">
              Quay lại
            </Button>
          </Link>
          <div className="space-x-2">
            <Button onClick={onClick} type="primary" className="border-green-500 bg-white text-green-500">
              Xuất Excel
            </Button>
            <Button danger className="bg-white">
              Xuất PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Đơn hàng: </span>
                  <span className="text-blue-600">{data.order?.id}</span>
                  <div className="text-gray-500 text-sm">{new Date(data.order?.ngayDat).toLocaleString()}</div>
                </div>
                {/* <Select defaultValue="delivered" className="w-36 text-green-600">
                  <Option value="delivered">Đã giao hàng</Option>
                </Select> */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-gray-500 mb-2">Khách hàng</h3>
                <div className="font-medium">Họ và tên: {data.user?.ten}</div>
                <div className="text-gray-500">Số điện thoại: {data.user?.soDienThoai}</div>
                <div className="text-gray-500">Email: {data.user?.email}</div>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-gray-500 mb-2">Người nhận</h3>
                <div className="font-medium">Họ và tên: {data.order?.name}</div>
                <div className="text-gray-500">Số điện thoại: {data.order?.phone}</div>
                <div className="text-gray-500">Địa chỉ: {data.order?.address}</div>

              </div>
            </div>

            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <Table
                columns={columns}
                dataSource={data.tours || []}
                pagination={false}
                bordered={false}
                className="border-b"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-4">
              <div className="border-b p-4 bg-gray-100">
                <h3 className="font-medium">Thanh toán</h3>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2">Tạm tính</td>
                      <td className="text-right">
                        {thanhTien}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2">Phí vận chuyển</td>
                      <td className="text-right text-green-500">Miễn phí</td>
                    </tr>
                    <tr>
                      <td className="py-2">Thành tiền</td>
                      <td className="text-right">{thanhTien}</td>
                    </tr>
                    <tr>
                      <td className="py-2">Phương thức thanh toán</td>
                      <td className="text-right">Chuyển khoản</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Cần thanh toán</div>
                    <div className="text-sm text-gray-500">({data.tours?.length} sản phẩm)</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-red-500 text-right">{thanhTien}</div>
                    <div className="text-xs text-gray-500 text-right">(Đã bao gồm VAT)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b p-4 bg-gray-100">
                <h3 className="font-medium">Ghi chú</h3>
              </div>
              <div className="p-2">
                <Input.TextArea
                  value={data.order?.description}
                  autoSize={{ minRows: 4, maxRows: 6 }}
                  className="border-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OrderDetailPage