import { DownOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AdminOrders } from '@/Api';
import Container from '@admin/component/Container';
import Header from '@admin/component/Header';

const columns = [
  { title: 'Mã ĐH', dataIndex: 'id', key: 'id', width: 100, },
  { title: 'Tên khách hàng', dataIndex: 'tenKhachHang', key: 'tenKhachHang', width: 150, },
  {
    title: 'Thời gian đặt', dataIndex: 'ngayDat', key: 'ngayDat', width: 120,
    render(item) { return <p>{new Date(item).toLocaleString()}</p> }
  },
  { title: 'Đơn giá', dataIndex: 'thanhTien', key: 'thanhTien', width: 120, },
  {
    title: 'Xem chi tiết', key: 'details', width: 10,
    render: item => (
      <Link to={`/dashboard/orders/${item?.id}`}>
        <Button type="text" icon={<InfoCircleOutlined className="text-blue-500 text-xl" />} />
      </Link>
    ),
  },
];

function OrderPage() {
  const location = useLocation()
  const [list, setList] = useState([])

  useEffect(function () {
    AdminOrders.get('/')
      .then(res => res.data)
      .then(data => setList(data.data))
  }, [location])

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
            <Input className="rounded-l-md w-64" placeholder="Tìm kiếm đơn hàng" suffix={<SearchOutlined />} />
            <Button className="flex items-center ml-2 border border-gray-300">
              <span>Sắp xếp</span>
              <DownOutlined className="ml-1" />
            </Button>
          </div>
        </div>
      </Container>

      <Container
        As={Table}
        className="overflow-auto"
        columns={columns}
        dataSource={list} pagination={false} bordered size="middle"
      />
      {/* 
        <div className="flex justify-end mt-4">
          <Pagination current={currentPage} onChange={setCurrentPage} total={100} showSizeChanger={false} />
        </div> */}
    </>
  );
}


export default OrderPage;