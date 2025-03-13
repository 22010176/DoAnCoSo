import { useState } from 'react';

import Container from '@admin/component/Container'
import Header from '@admin/component/Header';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import TourForm from '../component/UpdateTourPage/TourForm';

const UpdateTourPage = () => {
  const [tourName, setTourName] = useState('Du lịch Nha Trang - WinWorders Nha Trang - Hòn Mụn 3N2Đ');
  const [departure, setDeparture] = useState('HCM');
  const [destination, setDestination] = useState('Nha Trang');
  const [days, setDays] = useState('3 ngày');
  const [adultPrice, setAdultPrice] = useState('1.000.000');
  const [childPrice, setChildPrice] = useState('800.000');
  const [infantPrice, setInfantPrice] = useState('500.000');
  const [description, setDescription] = useState('Thành phố Nha Trang nổi tiếng du khách không chỉ bởi vẻ đẹp của các bãi biển, những trải nghiệm thú vị khó quên, hay sự mến khách của người dân địa phương mà còn bởi những món ăn ngon đậm đà hương vị miền Trung. Bên cạnh đó, vùng đất đầy nắng và gió - Ninh Thuận,');
  const [transport, setTransport] = useState('Máy bay');
  const [images, setImages] = useState([
    '/api/placeholder/640/360',
    '/api/placeholder/640/360'
  ]);

  const handleAddImage = () => {
    setImages([...images, '/api/placeholder/640/360']);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <>
      <Header>Quản lý tour du lịch</Header>
      <Container className="p-5">
        <div className="flex gap-4 mb-2">
          <Button className='px-5 flex gap-2 items-center' size='large' color='blue' variant='outlined'>
            <FontAwesomeIcon icon={faArrowLeft} />
            Quay lại
          </Button>
          <Button className='px-5 flex gap-2 items-center' size='large' color='blue' variant='outlined'>
            <FontAwesomeIcon icon={faSave} />
            Lưu
          </Button>
        </div>

        <div className="flex gap-2 border-b border-gray-200 mb-3">
          <button className="px-8 py-2 bg-green-600 text-white font-semibold rounded-t">
            Thông tin cơ bản
          </button>
          <button className="px-8 py-2 bg-green-100 text-green-800 font-semibold rounded-t">
            Lịch trình
          </button>
          <button className="px-8 py-2 bg-green-100 text-green-800 font-semibold rounded-t">
            Đơn hàng
          </button>
        </div>

        <TourForm />

      </Container>
    </>
  );
};

export default UpdateTourPage;
