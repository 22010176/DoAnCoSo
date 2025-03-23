import { useState } from "react";

function ChangePasswordPage() {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ĐỔI MẬT KHẨU</h1>

      <p className="text-gray-700 mb-6">
        Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block mb-2 font-medium">
            Mật khẩu cũ <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            className="w-full p-3 bg-gray-100 rounded outline-none"
            value={formData.oldPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2 font-medium">
            Mật khẩu mới <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full p-3 bg-gray-100 rounded outline-none"
            value={formData.newPassword}
            onChange={handleChange}
            required
            minLength={8}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Xác nhận lại mật khẩu <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-3 bg-gray-100 rounded outline-none"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition-colors">
          ĐẶT LẠI MẬT KHẨU
        </button>
      </form>
    </div>
  );
}

export default ChangePasswordPage