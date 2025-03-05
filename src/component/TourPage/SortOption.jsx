import { Checkbox, Collapse, ConfigProvider } from "antd"
import { Link } from "react-router-dom";

const theme = {
  components: {
    Collapse: {
      /* here is your component tokens */
      headerPadding: "10px 0px",
      contentPadding: "0px 15px",
      // padding: '0px'
    },
  },
}

const Aitems = [
  {
    key: '1',
    label: <p className="text-lg">Tour trong nước</p>,
    showArrow: false,
    children: (
      <div className="flex flex-col gap-1 -mt-4">
        <Link className="">Phú Quốc</Link>
        <Link className="">Nha Trang</Link>
        <Link className="">Đà Nẵng</Link>
      </div>
    ),
  },
  {
    key: '2',
    label: <p className="text-lg">Tour nước ngoài</p>,
    showArrow: false,
    children: (
      <div className="flex flex-col gap-1 -mt-4">
        <Link>Phú Quốc</Link>
        <Link>Nha Trang</Link>
        <Link>Đà Nẵng</Link>
      </div>
    )
  }
];

const Bitems = [
  {
    key: '1',
    showArrow: false,
    label: <p className="text-lg">Chọn mức giá</p>,
    children: (
      <div className="flex flex-col gap-1 -mt-4 ">
        <div className="flex gap-2">
          <Checkbox />
          <label>Giá dưới 1.000.000đ</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>1.000.000đ - 3.000.000đ</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>3.000.000đ - 5.000.000đ</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>5.000.000đ - 7.000.000đ</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>7.000.000đ - 9.000.000đ</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Giá trên 9.000.000đ</label>
        </div>
      </div>
    )
  },
  {
    key: '2',
    showArrow: false,
    label: <p className="text-lg">Điểm khởi hành</p>,
    children: (
      <div className="flex flex-col gap-1 -mt-4">
        <div className="flex gap-2">
          <Checkbox />
          <label>Hà Nội</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>TP Hồ Chí Minh</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Huế</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Đà Nẵng</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Buôn Ma Thuột</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Giá trên 9.000.000đ</label>
        </div>
      </div>
    )
  },
  {
    key: '3',
    showArrow: false,
    label: <p className="text-lg">Điểm đến</p>,
    children: (
      <div className="flex flex-col gap-1 -mt-4">
        <div className="flex gap-2">
          <Checkbox />
          <label>Úc</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Trung Quốc</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Nhật Bản</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Hàn Quốc</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Singapore</label>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <label>Campuchia</label>
        </div>
      </div>
    )
  }
]

function SortOption() {
  return (
    <ConfigProvider theme={theme}>
      <div className="xl:flex hidden top-0 left-0 border border-gray-500 rounded-2xl p-5 flex-col gap-5 h-min">
        <div className="border-b border-gray-200">
          <div className="relative">
            <div className="absolute w-1/4 border-3 border-green-600 bottom-0 translate-y-1/2"></div>
            <div className="border-b-1 text-lg">Danh mục tour</div>
          </div>
          <Collapse ghost items={Aitems} />
        </div>
        {Bitems.map((i, j, arr) => (
          <div key={j} className={arr.length - 1 > j ? "border-b border-gray-200" : ""}>
            <Collapse ghost items={[i]} />
          </div>
        ))}
      </div>
    </ConfigProvider>

  )
}

export default SortOption