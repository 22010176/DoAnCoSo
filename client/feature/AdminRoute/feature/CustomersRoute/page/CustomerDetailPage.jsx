import React from 'react';
import { Table, Button, Input, Pagination, Select, Badge } from 'antd';
import { LeftOutlined, SearchOutlined, FilterOutlined, SortAscendingOutlined } from '@ant-design/icons';
import Container from '@/feature/AdminRoute/component/Container';
import Header from '@/feature/AdminRoute/component/Header';
import { Link } from 'react-router-dom';


const { Option } = Select;

function CustomerDetailPage() {
  const columns = [
    { title: 'STT', dataIndex: 'stt', key: 'stt', width: 60, align: 'center', },
    { title: 'Mã đơn hàng', dataIndex: 'orderCode', key: 'orderCode', width: 120, },
    {
      title: 'Tên tour du lịch', dataIndex: 'tourName', key: 'tourName',
      render: (text, record) => (
        <ul className="list-disc pl-5">
          {record.tours.map((tour, index) => <li key={index}>{tour}</li>)}
        </ul>
      ),
    },
    { title: 'Thời gian đặt', dataIndex: 'orderTime', key: 'orderTime', width: 120, align: 'center', },
    { title: 'Địa chỉ nhận hàng', dataIndex: 'address', key: 'address', width: 160, },
    { title: 'Giá trị đơn hàng (đ)', dataIndex: 'orderValue', key: 'orderValue', width: 160, align: 'right', },
    {
      title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 120, align: 'center',
      render: () => <Button type="link" size="small">xem ở dưới</Button>,
    },
    {
      title: 'Thanh toán', dataIndex: 'payment', key: 'payment', width: 120, align: 'center',
      render: () => <Button type="link" size="small">xem ở dưới</Button>,
    },
    { title: 'Ghi chú', dataIndex: 'note', key: 'note', width: 120, },
  ];

  const data = [
    {
      key: '1',
      stt: 1,
      orderCode: '1001',
      tours: ['Tour A', 'Tour B'],
      orderTime: '14:00:00\n23/02/2025',
      address: 'La Tịnh, Hoài Đức, Hà Nội',
      orderValue: '15.000.000',
      status: '',
      payment: '',
      note: '',
    },
    {
      key: '2',
      stt: 2,
      orderCode: '1900',
      tours: ['Tour C'],
      orderTime: 'Nữ',
      address: '0432567890',
      orderValue: 'maimai@gmail.com',
      status: '',
      payment: '',
      note: '',
    },
    {
      key: '3',
      stt: 3,
      orderCode: 'hbgsya12',
      tours: ['Tour D'],
      orderTime: 'Nam',
      address: '0123456456',
      orderValue: 'maimai@gmail.com',
      status: '',
      payment: '',
      note: '',
    },
  ];

  return (
    <>
      <Header>Quản lý khách hàng / Lịch sử mua hàng </Header>
      <Container>
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Link to="/dashboard/customers">
              <Button type="primary" className="flex items-center" style={{ backgroundColor: '#1890ff' }}>
                Quay lại
              </Button>
            </Link>
            <Button type="primary" className="bg-green-600 hover:bg-green-700">
              Xuất Excel
            </Button>
            <Button danger>Xuất PDF</Button>
          </div>

          <div>
            <Input placeholder="Tìm kiếm đơn hàng" suffix={<SearchOutlined />} style={{ width: 240 }} />
          </div>
        </div>




      </Container>

      <Container className="grow">

        {/* Customer info */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Khách hàng: Lê Văn A</h2>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-4 items-center">
          <Select defaultValue="all-status" style={{ width: 180 }} suffixIcon={<span>▼</span>}>
            <Option value="all-status">Trạng thái (tất cả)</Option>
          </Select>

          <Select defaultValue="all-payment" style={{ width: 180 }} suffixIcon={<span>▼</span>}>
            <Option value="all-payment">Thanh toán (tất cả)</Option>
          </Select>

          <Button icon={<FilterOutlined />} />

          <div className="ml-auto flex items-center">
            <span className="mr-2">Sắp xếp</span>
            <Button icon={<SortAscendingOutlined />} />
          </div>
        </div>
        {/* Table */}
        <Table columns={columns} dataSource={data} bordered size="small" className="mb-4" />
      </Container>
    </>
  );
}

export default CustomerDetailPage