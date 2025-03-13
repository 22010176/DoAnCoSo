import { Card, Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';

import { faDollar, faRectangleList, faUser } from '@fortawesome/free-solid-svg-icons';

import Header from "../component/Header";

const lineData = {
  labels: ['Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
  datasets: [
    {
      label: 'Khách hàng',
      borderColor: 'green',
      backgroundColor: 'transparent',
      data: [10, 100, 150, 200, 250, 180],
    },
    {
      label: 'Đơn hàng',
      borderColor: 'orange',
      backgroundColor: 'transparent',
      data: [20, 250, 300, 150, 400, 300],
    },
  ],
};

const tourData = {
  labels: ['Tour quốc tế', 'Tour trong nước'],
  datasets: [
    {
      data: [33.19, 82.89],
      backgroundColor: ['#6a5acd', '#ff7f7f'],
    },
  ],
};

const orderStatusData = {
  labels: ['Đã giao hàng', 'Đã xác nhận', 'Chưa xác nhận', 'Đang giao hàng', 'Đã hủy'],
  datasets: [
    {
      data: [78.75, 83.19, 60.15, 15.64, 72.72],
      backgroundColor: ['#4caf50', '#ff9999', '#66b3ff', '#ffcc99', '#ff6666'],
    },
  ],
};

function DashboardPage() {
  const orderColumns = [
    { title: 'Mã đơn', dataIndex: 'id', key: 'id' },
    { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
    { title: 'Giá trị (đồng)', dataIndex: 'value', key: 'value' },
    {
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const statusColors = {
          'Đã giao hàng': 'green',
          'Chưa xác nhận': 'blue',
          'Đã xác nhận': 'cyan',
          'Đang giao hàng': 'orange',
          'Đã hủy': 'red',
        };
        return <Tag color={statusColors[status]}>{status}</Tag>;
      },
    },
  ];

  const orderData = [
    { id: '128790H', customer: 'Lê Văn A', value: '15.000.000', status: 'Đã giao hàng' },
    { id: '128790H', customer: 'Nguyễn Văn B', value: '12.000.000', status: 'Chưa xác nhận' },
    { id: '128790H', customer: 'Trần Thị C', value: '18.000.000', status: 'Đã xác nhận' },
    { id: '128790H', customer: 'Phạm Văn D', value: '10.500.000', status: 'Đang giao hàng' },
    { id: '128790H', customer: 'Hoàng Thị E', value: '9.000.000', status: 'Đã hủy' },
  ];

  const revenueData = {
    labels: ['Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
    datasets: [
      {
        label: 'Doanh thu (triệu đồng)',
        backgroundColor: ['#ff7f50', '#ff7f50', '#ff7f50', '#4682b4', '#4682b4', '#4682b4'],
        data: [3000, 2500, 2800, 4000, 3500, 2700],
      },
    ],
  };

  return (
    <div className='grow overflow-y-auto flex flex-col gap-5 p-5'>
      <Header className="z-1 w-full">Tổng quan trong tháng </Header>

      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4">
        <Card size='default' className="text-center" title={<FontAwesomeIcon className='text-green-500 text-4xl' icon={faUser} />}>
          <p className="text-2xl font-bold">333030</p>
          <p>Tổng khách hàng</p>
        </Card>
        <Card size='default' className="text-center" title={<FontAwesomeIcon className='text-orange-500 text-4xl' icon={faRectangleList} />}>
          <p className="text-2xl font-bold">333030</p>
          <p>Tổng đơn hàng</p>
        </Card>
        <Card size='default' className="text-center 2xl:col-span-1 lg:col-span-2" title={<FontAwesomeIcon className='text-blue-500 text-4xl' icon={faDollar} />}>
          <p className="text-2xl font-bold">333030</p>
          <p>Tổng doanh thu</p>
        </Card>
        <Card title="Tình trạng đơn hàng" className='p-0 lg:col-span-2 2xl:col-span-3'>
          <Table columns={orderColumns} dataSource={orderData} pagination={false} rowKey="id" className='m-0' />
        </Card>
        <Card title="Thống kê doanh thu 6 tháng">
          <Bar data={revenueData} />
        </Card>
        <Card title="Thống kê đơn hàng và khách hàng trong 6 tháng">
          <Line data={lineData} />
        </Card>

        <Card title="Tỉ lệ tour">
          <Pie data={tourData} />
        </Card>
        <Card title="Tỉ lệ đơn hàng">
          <Pie data={orderStatusData} />
        </Card>
      </div>

    </div>
  );
}

export default DashboardPage