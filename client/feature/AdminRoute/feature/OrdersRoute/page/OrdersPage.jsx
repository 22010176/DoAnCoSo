import { useState } from 'react';
import { Table, Input, Button, Dropdown, Space, Pagination } from 'antd';
import { SearchOutlined, DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Header from '@admin/component/Header';
import Container from '@admin/component/Container';
import { Link } from 'react-router-dom';


function OrderPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 60,
    },
    {
      title: 'Mã ĐH',
      dataIndex: 'orderCode',
      key: 'orderCode',
      width: 100,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customerName',
      key: 'customerName',
      width: 150,
    },
    {
      title: 'Tên tour',
      dataIndex: 'tourName',
      key: 'tourName',
      width: 200,
    },
    {
      title: 'Thời gian đặt',
      dataIndex: 'bookingTime',
      key: 'bookingTime',
      width: 120,
    },
    {
      title: 'Ngày xuất phát',
      dataIndex: 'departureDate',
      key: 'departureDate',
      width: 120,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (text) => (
        <div className="flex items-center">
          <div className="bg-green-100 text-green-800 rounded-md px-2 py-1 flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            {text}
          </div>
          <DownOutlined className="ml-2 text-gray-400" />
        </div>
      ),
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      width: 120,
    },
    {
      title: 'Xem chi tiết',
      dataIndex: 'details',
      key: 'details',
      width: 100,
      render: () => (
        <div className="flex justify-center">
          <Link to="/dashboard/orders/33">
            <Button type="text" icon={<InfoCircleOutlined className="text-blue-500 text-xl" />} />
          </Link>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      stt: 1,
      orderCode: 'H1234',
      customerName: 'Lê Văn A',
      tourName: 'Du lịch Nha Trang - WinWorders - Hòn Mun',
      bookingTime: '14:00:00 12/07/2024',
      departureDate: '8:00:00 20/07/2024',
      status: 'Đã giao hàng',
      price: '15.000.000',
    },
    {
      key: '2',
      stt: 2,
      orderCode: '',
      customerName: '',
      tourName: '',
      bookingTime: '',
      departureDate: '',
      status: '',
      price: '',
    },
  ];
  return (
    <>
      <Header>Quản lý đơn hàng</Header>

      <Container>
        <div className="flex justify-between mb-4">
          <div className="space-x-2">
            <Button type="primary" className="bg-green-500 hover:bg-green-600 border-0">
              Xuất Excel
            </Button>
            <Button danger>
              Xuất PDF
            </Button>
          </div>
          <div className="flex items-center">
            <Input
              className="rounded-l-md w-64"
              placeholder="Tìm kiếm đơn hàng"
              suffix={<SearchOutlined />}
            />
            <Button className="flex items-center ml-2 border border-gray-300">
              <span>Sắp xếp</span>
              <DownOutlined className="ml-1" />
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="middle"
          className="border border-gray-200"
        />

        <div className="flex justify-end mt-4">
          <Pagination
            current={currentPage}
            onChange={setCurrentPage}
            total={100}
            showSizeChanger={false}
          />
        </div>
      </Container>
    </>
  );
}


export default OrderPage;