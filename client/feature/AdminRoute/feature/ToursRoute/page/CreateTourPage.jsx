import Container from "@admin/component/Container"
import Header from "@admin/component/Header";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

function CreateTourPage() {
  return (
    <>
      <Header>Quản lý tour du lịch / Thêm mới tour du lịch</Header>
      <Container className="grow overflow-auto">
        {/* Header buttons */}
        <div className="flex gap-2 mb-4">
          <Button variant="outlined" color="blue" >
            <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
            Quay lại
          </Button>
          <Button variant="outlined" color="blue" >
            <FontAwesomeIcon className="mr-3" icon={faSave} />
            Lưu
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 border-b">
          <div className="px-6 py-2 bg-green-100 border-t border-l border-r rounded-t-md font-medium text-green-800">
            Thông tin cơ bản
          </div>
          <div className="px-6 py-2 bg-green-600 text-white border-t border-l border-r rounded-t-md font-medium">
            Lịch trình
          </div>
          <div className="px-6 py-2 bg-green-100 border-t border-l border-r rounded-t-md font-medium text-green-800">
            Đơn hàng
          </div>
        </div>

        {/* Content */}
        {new Array(5).fill().map((i, j) => (
          <div key={j} className="border rounded-lg p-6 mb-5">
            <div className="mb-6">
              <h2 className="font-medium">Ngày 1</h2>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Tiêu đề</label>
              <input
                type="text"
                className="w-56 border rounded p-2"
                value="HCM - Nha Trang"
                readOnly
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Lịch trình</label>
              <div className="border rounded p-4">
                <p>Xe và HDV đón khách tại sân bay Cam Ranh hoặc bến xe, ga. Quý khách dùng cơm trưa tại nhà hàng và về khách sạn nghỉ ngơi.</p>
                <p>Buổi chiều</p>
                <p>Quý khách có thể lựa chọn 1 trong 2 chương trình sau:</p>
                <p>Chương trình 1: Đi VinWonders chi phí tự túc.</p>
              </div>
            </div>
          </div>
        ))}

      </Container>
    </>
  );
}

export default CreateTourPage