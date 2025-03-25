import Container from '@admin/component/Container';
import Header from '@admin/component/Header';
import { DownOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Select } from 'antd';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const chartData = [
  { name: 'Tháng 1', 'Đơn hàng': 50, 'Khách hàng': 40 },
  { name: 'Tháng 2', 'Đơn hàng': 60, 'Khách hàng': 50 },
  { name: 'Tháng 3', 'Đơn hàng': 70, 'Khách hàng': 60 },
  { name: 'Tháng 4', 'Đơn hàng': 65, 'Khách hàng': 55 },
  { name: 'Tháng 5', 'Đơn hàng': 90, 'Khách hàng': 80 },
  { name: 'Tháng 6', 'Đơn hàng': 80, 'Khách hàng': 70 }
];

const topTours = [
  { month: 'Tháng 1', name: 'Tour A', quantity: 78 },
  { month: 'Tháng 2', name: 'Tour B', quantity: 60 },
  { month: 'Tháng 3', name: 'Tour C', quantity: 90 },
  { month: 'Tháng 4', name: 'Tour D', quantity: 100 },
  { month: 'Tháng 5', name: 'Tour E', quantity: 111 },
  { month: 'Tháng 6', name: 'Tour F', quantity: 90 }
];


function DoanhThu() {
  const [startMonth, setStartMonth] = useState('1');
  const [endMonth, setEndMonth] = useState('6');
  const [year, setYear] = useState('2024');

  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      { label: 'Chi phí', data: [35, 28, 40, 43, 38, 40], backgroundColor: 'rgb(149, 117, 205)', },
      { label: 'Doanh thu', data: [60, 44, 89, 80, 70, 76], backgroundColor: 'rgb(255, 99, 132)', },
      { label: 'Lợi nhuận', data: [25, 16, 49, 37, 31, 35], backgroundColor: 'rgb(75, 192, 192)', },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { grid: { display: true, color: 'rgba(0, 0, 0, 0.05)', }, },
      y: {
        min: 0, max: 100, grid: { display: true, color: 'rgba(0, 0, 0, 0.05)', },
        ticks: {
          callback: function (value) { return value; }
        }
      }
    },
    plugins: {
      legend: { display: true, position: 'bottom', },
      tooltip: { enabled: true, },
    },
  };
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <Select defaultValue="month" className="w-36" options={[{ value: 'month', label: 'Theo tháng' }]} suffixIcon={<DownOutlined />} />
        <Select className="w-30" defaultValue="year" options={[{ value: 'year', label: 'Chọn năm' }]} />
        <Select className="w-24" value={startMonth} onChange={setStartMonth} options={[{ value: '1', label: 'Tháng 1' }]} suffixIcon={<DownOutlined />} />

        <span className="flex items-center">Từ tháng</span>

        <Select className="w-24" value={endMonth} onChange={setEndMonth} options={[{ value: '6', label: 'Tháng 6' }]} suffixIcon={<DownOutlined />} />

        <span className="flex items-center">Đến tháng</span>

        <Select className="w-24" value={year} onChange={setYear} options={[{ value: '2024', label: '2024' }]} suffixIcon={<DownOutlined />} />

        <Button type="primary" className="bg-blue-600 text-white">Thống kê</Button>
        <Button className="bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600">Xuất Excel</Button>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12">
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-xs text-gray-500 mb-2">(trăm triệu đồng)</div>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="w-full lg:w-4/12 pl-0 lg:pl-4 mt-4 lg:mt-0">
          <Card className="mb-4">
            <div className="text-lg font-medium">Tổng Chi Phí</div>
            <div className="text-2xl font-bold text-blue-500">65.500.000.000</div>
            <Divider className="my-4" />

            <div className="text-lg font-medium">Tổng Doanh Thu</div>
            <div className="text-2xl font-bold text-blue-500">95.500.000.000</div>
            <Divider className="my-4" />

            <div className="text-lg font-medium">Tổng Lợi Nhuận</div>
            <div className="text-2xl font-bold text-blue-500">30.500.000.000</div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function OrderAndCustomer() {
  const [year, setYear] = useState('2023');
  const [fromMonth, setFromMonth] = useState('Tháng 1');
  const [toMonth, setToMonth] = useState('Tháng 6');

  return (
    <>


      <div className="flex space-x-2 mb-10">
        <select className="px-2 py-1 border rounded" value={year} onChange={(e) => setYear(e.target.value)}>
          <option>2023</option>
        </select>

        <select className="px-2 py-1 border rounded" value={fromMonth} onChange={(e) => setFromMonth(e.target.value)}>
          <option>Từ tháng</option>
          <option>Tháng 1</option>
        </select>

        <select className="px-2 py-1 border rounded" value={toMonth} onChange={(e) => setToMonth(e.target.value)}>
          <option>Đến tháng</option>
          <option>Tháng 6</option>
        </select>

        <button className="px-4 py-1 bg-blue-500 text-white rounded">
          Thống kê
        </button>
        <button className="px-4 py-1 bg-white text-gray-700 border rounded">
          Xuất Excel
        </button>
      </div>


      <div className='grid grid-cols-[2fr_1fr] gap-5'>
        {/* Chart */}
        <div className="flex flex-col gap-5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Đơn hàng" stroke="#3B82F6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Khách hàng" stroke="#EF4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <p className="text-gray-500">Tổng Khách Hàng</p>
              <p className="text-2xl font-bold">5.500</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <p className="text-gray-500">Tổng Đơn Hàng</p>
              <p className="text-2xl font-bold">8.567</p>
            </div>
          </div>

        </div>


        {/* Main Content Area */}
        <div className=" gap-4">
          {/* Top Tours */}
          <div className="col-span-2 bg-white border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Những tour được đặt nhiều nhất</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-1 py-5 text-left">Tháng</th>
                  <th className="px-1 py-5 text-left">Tên tour</th>
                  <th className="px-1 py-5 text-right">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {topTours.map((tour, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-1 py-5">{tour.month}</td>
                    <td className="px-1 py-5">{tour.name}</td>
                    <td className="px-1 py-5 text-right">{tour.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

const TourManagementDashboard = () => {

  const [selectedView, setSelectedView] = useState('Doanh thu');
  return (
    <>
      <Header>Thống kê</Header>

      <Container className="grow overflow-auto">
        {/* Tabs and Filters */}
        <div className="flex space-x-2 mb-10">
          <button
            className={`px-4 py-2 rounded ${selectedView === 'Doanh thu'
              ? 'bg-green-100 text-green-700'
              : 'bg-white text-gray-700'
              }`}
            onClick={() => setSelectedView('Doanh thu')}>
            Doanh thu
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedView === 'Đơn hàng - khách hàng'
              ? 'bg-green-100 text-green-700'
              : 'bg-white text-gray-700'
              }`} onClick={() => setSelectedView('Đơn hàng - khách hàng')}>
            Đơn hàng - khách hàng
          </button>
        </div>

        {selectedView === 'Đơn hàng - khách hàng' && <OrderAndCustomer />}
        {selectedView === 'Doanh thu' && <DoanhThu />}
      </Container>
    </>
  );
};

export default TourManagementDashboard;