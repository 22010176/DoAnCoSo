import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Space, Select } from 'antd';
import { SearchOutlined, PlusOutlined, DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';


import Header from "@admin/component/Header"
import Container from "@admin/component/Container"
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { TourResource } from '@/Api';

const columns = [
  { title: 'Mã Tour', dataIndex: 'maTour', key: 'maTour', width: '8%', render: i => i.slice(0, 5) + "..." },
  { title: 'Tên Tour', dataIndex: 'tenTour', key: 'tenTour', width: '40%', },
  { title: 'Thời gian', dataIndex: 'thoiGian', key: 'thoiGian', width: '8%', render: value => `${value} ngày ${value - 1} đêm` },
  { title: 'Nơi khởi hành', dataIndex: 'noiKhoiHanh', key: 'noiKhoiHanh', width: '8%', },
  { title: 'Giá tiền', dataIndex: 'giaTien', key: 'giaTien', width: '5%', },
  {
    title: 'Đánh giá', dataIndex: 'danhGia', key: 'danhGia', width: '5%',
    render: (danhGia) => (
      <div className="flex">
        {Array(danhGia).fill().map((_, index) => (
          <span key={index} className="text-yellow-400">★</span>
        ))}
      </div>
    ),
  },
  {
    title: 'Xem chi tiết',
    key: 'action',
    width: '7%',
    render: (_, item) => (
      <Link to={`/dashboard/tours/${item.maTour}`}>
        <Button variant='outlined' color='blue'>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </Link>
    ),
  },
];
function ManageToursPage() {
  const location = useLocation()
  const [tours, setTours] = useState([])
  const [search, setSearch] = useState('')

  useEffect(function () {
    TourResource.get('/list')
      .then(res => res.data)
      .then(data => setTours(data.data))
  }, [location])

  console.log(tours)

  return (
    <>
      <Header >Quản lý tour du lịch</Header>
      <Container>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-2">
            <Button type="primary" className="bg-green-500 hover:bg-green-600 border-green-500" icon={<DownloadOutlined />}>
              Xuất Excel
            </Button>
            <Button danger className="bg-red-50" icon={<DownloadOutlined />}>
              Xuất PDF
            </Button>
          </div>

          <div className="flex space-x-2">
            <Input placeholder="Tìm kiếm tour" className="w-64 rounded-lg" prefix={<SearchOutlined className="text-gray-400" />} value={search} onChange={val => setSearch(val.target.value)} />
            <Link to="/dashboard/tours/create">
              <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500" icon={<PlusOutlined />}>
                Thêm mới tour du lịch
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center mb-2">
          <span className="mr-2">Sắp xếp</span>
          <Select
            defaultValue="newest"
            style={{ width: 120 }}
            options={[
              { value: 'newest', label: 'Mới nhất' },
              { value: 'oldest', label: 'Cũ nhất' },
              { value: 'price-asc', label: 'Giá tăng dần' },
              { value: 'price-desc', label: 'Giá giảm dần' },
            ]}
          />
        </div>
      </Container>
      <Container className="flex flex-col overflow-auto">
        <Table
          bordered
          pagination={false}
          columns={columns}
          className="bg-white rounded shadow"
          dataSource={tours
            ?.filter(i => i.tenTour.includes(search))
            ?.map((i, j) => ({ key: j, ...i }))}
        />
      </Container>
    </>
  );
}

export default ManageToursPage