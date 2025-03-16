import React from 'react';
import { Table, Button, Input, Space, Select } from 'antd';
import { SearchOutlined, PlusOutlined, DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';


import Header from "@admin/component/Header"
import Container from "@admin/component/Container"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const columns = [
  { title: 'Mã Tour', dataIndex: 'maTour', key: 'maTour', width: '8%', },
  { title: 'Tên Tour', dataIndex: 'tenTour', key: 'tenTour', width: '40%', },
  { title: 'Thời gian', dataIndex: 'thoiGian', key: 'thoiGian', width: '8%', },
  { title: 'Nơi khởi hành', dataIndex: 'noiKhoiHanh', key: 'noiKhoiHanh', width: '8%', },
  { title: 'Giá tiền', dataIndex: 'giaTien', key: 'giaTien', width: '5%', },
  {
    title: 'Đánh giá', dataIndex: 'danhGia', key: 'danhGia', width: '5%',
    render: (danhGia) => {
      return (
        <div className="flex">
          {[...Array(danhGia)].map((_, index) => (
            <span key={index} className="text-yellow-400">★</span>
          ))}
        </div>
      );
    },
  },
  {
    title: 'Xem chi tiết',
    key: 'action',
    width: '7%',
    render: () => (
      <Link>
        <Button variant='outlined' color='blue'>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </Link>
    ),
  },
];
function ManageToursPage() {

  return (
    <>
      <Header >Quản lý tour du lịch</Header>
      <Container>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-2">
            <Button type="primary" className="bg-green-500 hover:bg-green-600 border-green-500" icon={<DownloadOutlined />}            >
              Xuất Excel
            </Button>
            <Button danger className="bg-red-50" icon={<DownloadOutlined />}            >
              Xuất PDF
            </Button>
          </div>

          <div className="flex space-x-2">
            <Input placeholder="Tìm kiếm tour" className="w-64 rounded-lg"
              prefix={<SearchOutlined className="text-gray-400" />} />
            <Link to="/dashboard/tours/create">
              <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500" icon={<PlusOutlined />}            >
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
          columns={columns}
          pagination={false}
          className="bg-white rounded shadow"
          dataSource={new Array(5).fill().map((i, j) => ({
            key: j,
            maTour: 'Q6278',
            tenTour: 'Du lịch Nha Trang - WinWorders Nha Trang - Hòn Mun 3N2Đ',
            thoiGian: '3 Ngày 2 đêm',
            noiKhoiHanh: 'Hà Nội',
            giaTien: '15.000.000',
            danhGia: 5,
          }))} />
      </Container>
    </>
  );
}

export default ManageToursPage