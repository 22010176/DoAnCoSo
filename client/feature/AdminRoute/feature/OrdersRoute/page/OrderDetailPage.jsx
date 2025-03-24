import { Button, Select, Input, Table } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import Container from "@admin/component/Container"
import Header from "@admin/component/Header"
import { Link } from 'react-router-dom';

function OrderDetailPage() {
  const { Option } = Select;

  const orderItems = [
    {
      key: '1',
      name: 'Vé người lớn tour Nha Trang - Vinpearl Land',
      code: 'Mã tour: NT12345',
      quantity: '02',
      price: '1.000.000',
      total: '2.000.000'
    },
    {
      key: '2',
      name: 'Vé trẻ em tour Nha Trang - Vinpearl Land',
      code: 'Mã tour: NT12345',
      quantity: '01',
      price: '800.000',
      total: '800.000'
    }
  ];

  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div>
          <div>{text}</div>
          <div className="text-gray-500 text-xs">{record.code}</div>
        </div>
      ),
      width: '40%'
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      width: '15%'
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      width: '20%'
    },
    {
      title: 'Thành tiền',
      dataIndex: 'total',
      key: 'total',
      align: 'right',
      width: '25%'
    }
  ];
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
            <Button type="primary" className="border-green-500 bg-white text-green-500">
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
                  <span className="text-blue-600">H1234</span>
                  <div className="text-gray-500 text-sm">24/02/2022 - 23: 04</div>
                </div>
                <Select defaultValue="delivered" className="w-36 text-green-600">
                  <Option value="delivered">Đã giao hàng</Option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-gray-500 mb-2">Khách hàng</h3>
                <div className="font-medium">Mạnh Mạnh</div>
                <div className="text-gray-500">0333.333.333</div>
                <div className="text-gray-500">manhh@gmail.com</div>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-gray-500 mb-2">Người nhận</h3>
                <div className="font-medium">Triệu Lê Mạnh</div>
                <div className="text-gray-500">0333.333.333</div>
                <div className="text-gray-500 text-sm">Số nhà 6, Ngõ 60, La Tinh 2, Đông La, Hoài Đức, Hà Nội</div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <Table
                columns={columns}
                dataSource={orderItems}
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
                      <td className="text-right">2.800.000</td>
                    </tr>
                    <tr>
                      <td className="py-2">Mã giảm giá <span className="text-red-500 text-xs bg-red-100 px-1 py-0.5 rounded">Giảm 10%</span></td>
                      <td className="text-right text-red-500">-280.000</td>
                    </tr>
                    <tr>
                      <td className="py-2">Phí vận chuyển</td>
                      <td className="text-right text-green-500">Miễn phí</td>
                    </tr>
                    <tr>
                      <td className="py-2">Thành tiền</td>
                      <td className="text-right">2.520.000</td>
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
                    <div className="text-sm text-gray-500">(2 sản phẩm)</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-red-500">2.520.000</div>
                    <div className="text-xs text-gray-500 text-right">(Đã bao gồm VAT)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b p-4 bg-gray-100">
                <h3 className="font-medium">Ghi chú</h3>
              </div>
              <div className="p-4">
                <Input.TextArea
                  placeholder="Giao hàng vào buổi sáng"
                  defaultValue="Giao hàng vào buổi sáng"
                  autoSize={{ minRows: 4, maxRows: 6 }}
                  className="border-none"
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