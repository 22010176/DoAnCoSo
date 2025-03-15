import { useState } from 'react';

import Container from '@admin/component/Container'
import Header from '@admin/component/Header';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import TourForm from '../component/UpdateTourPage/TourForm';

const UpdateTourPage = () => {
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
      <Header className="mx-5 mt-5">Quản lý tour du lịch</Header>
      <Container className="p-5 mx-5 mb-5">
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
