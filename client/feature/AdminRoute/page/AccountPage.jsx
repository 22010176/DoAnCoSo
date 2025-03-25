import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Container from '@admin/component/Container';

const UserProfileInterface = () => {
  const [user] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0912345678',
    address: 'Hà Nội, Việt Nam',
    joinDate: '15/03/2024'
  });

  return (
    <Container className="w-full flex grow flex-col bg-white shadow-lg rounded-xl overflow-hidden">

      <div className="h-50 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <img
          src="/assets/imgs/bg.jpg"
          alt="User Avatar"
          className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 border-4 border-white rounded-full size-30 object-cover"
        />
      </div>

      <div className=' my-5'>
        <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-lg text-gray-500 mb-4">Quản trị viên </p>
      </div>

      <div className="space-y-3 text-left px-6 grow">
        <div className="flex items-center">
          <Mail className="mr-3 text-blue-500" size={20} />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center">
          <Phone className="mr-3 text-green-500" size={20} />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-3 text-red-500" size={20} />
          <span>{user.address}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-3 text-purple-500" size={20} />
          <span>Ngày tham gia: {user.joinDate}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-4 pb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Chỉnh sửa hồ sơ
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
          Chia sẻ hồ sơ
        </button>
      </div>


    </Container>
  );
};

export default UserProfileInterface;