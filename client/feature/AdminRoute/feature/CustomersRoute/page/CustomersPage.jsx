import { ExportOutlined, FilePdfOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Button, Input, Pagination, Table } from 'antd';

import Container from "@/feature/AdminRoute/component/Container";
import Header from "@/feature/AdminRoute/component/Header";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'STT', dataIndex: 'stt', key: 'stt', width: 70, align: 'center', },
  { title: 'Họ tên', dataIndex: 'name', key: 'name', width: 500 },
  { title: 'Ngày sinh', dataIndex: 'birthdate', key: 'birthdate', width: 150 },
  { title: 'Giới tính', dataIndex: 'gender', key: 'gender', width: 100 },
  { title: 'SĐT', dataIndex: 'phone', key: 'phone', width: 200 },
  { title: 'Email', dataIndex: 'email', key: 'email', width: 500 },
  { title: 'Số đơn hàng', dataIndex: 'orderCount', key: 'orderCount', align: 'center', width: 200 },
  {
    title: 'Chi tiết', align: 'center', width: 100,
    render: (value, item) => (
      <Link to="/dashboard/customers/2">
        <Button type="link" color='blue'><FontAwesomeIcon icon={faInfo} /></Button>
      </Link>
    ),
  },
];

function CustomersPage() {
  return (
    <>
      <Header >Quản lý khách hàng</Header>

      <Container className="flex flex-col gap-5">
        <div className="flex justify-between gap-10">
          <div className="flex gap-3">
            <Button type="primary" className="bg-green-600 hover:bg-green-700">
              Xuất Excel
            </Button>
            <Button danger>Xuất PDF</Button>
          </div>
          <Input className="ml-100" placeholder="Tìm kiếm khách hàng" allowClear />
        </div>

        <div className="flex justify-end ">
          <div className="flex items-center">
            {/* <span className="mr-2">Note: sắp xếp theo số lượng đơn hàng</span> */}
            <Button icon={<SortDescendingOutlined />}>
              Sắp xếp
            </Button>
          </div>
        </div>
      </Container>

      <Container className="overflow-auto grow flex flex-col gap-5">
        <Table pagination={false} bordered size='small' columns={columns}
          dataSource={new Array(10).fill().map((i, j) => (
            ({
              key: j,
              stt: j + 1,
              name: 'Hoàng Văn B',
              birthdate: 'Nam',
              gender: 'Nam',
              phone: '0123456456',
              email: 'maimai@gmail.com',
              orderCount: '0',
            })
          ))} />
        <div className="flex justify-end">
          <Pagination simple defaultCurrent={1} total={30} pageSize={10} />
        </div>
      </Container>
    </>
  )
}

export default CustomersPage