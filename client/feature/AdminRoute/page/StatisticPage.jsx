import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Select, Button, Card, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Container from '@admin/component/Container';
import Header from '@admin/component/Header';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticPage = () => {
  const [startMonth, setStartMonth] = useState('1');
  const [endMonth, setEndMonth] = useState('6');
  const [year, setYear] = useState('2024');

  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Chi phí',
        data: [35, 28, 40, 43, 38, 40],
        backgroundColor: 'rgb(149, 117, 205)',
      },
      {
        label: 'Doanh thu',
        data: [60, 44, 89, 80, 70, 76],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Lợi nhuận',
        data: [25, 16, 49, 37, 31, 35],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function (value) {
            return value;
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <>
      <Header>Thống kê</Header>
      <Container className="grow overflow-auto">
        <div className="flex">
          <button className="px-4 py-3 bg-green-600 text-white font-medium">Doanh thu</button>
          <button className="px-4 py-3 bg-green-100 text-black font-medium">Đơn hàng - Khách hàng</button>
        </div>


        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <Select
              defaultValue="month"
              className="w-36"
              options={[{ value: 'month', label: 'Theo tháng' }]}
              suffixIcon={<DownOutlined />}
            />

            <Select
              className="w-24"
              defaultValue="year"
              options={[{ value: 'year', label: 'Chọn năm' }]}
            />

            <Select
              className="w-24"
              value={startMonth}
              onChange={setStartMonth}
              options={[{ value: '1', label: 'Tháng 1' }]}
              suffixIcon={<DownOutlined />}
            />

            <span className="flex items-center">Từ tháng</span>

            <Select
              className="w-24"
              value={endMonth}
              onChange={setEndMonth}
              options={[{ value: '6', label: 'Tháng 6' }]}
              suffixIcon={<DownOutlined />}
            />

            <span className="flex items-center">Đến tháng</span>

            <Select
              className="w-24"
              value={year}
              onChange={setYear}
              options={[{ value: '2024', label: '2024' }]}
              suffixIcon={<DownOutlined />}
            />

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
      </Container>
    </>
  );
};

export default StatisticPage;