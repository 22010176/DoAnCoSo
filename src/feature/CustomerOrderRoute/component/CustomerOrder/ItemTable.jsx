import { Button, Input, Table } from "antd";
import { Link } from "react-router-dom";


const columns = [
  {
    title: <p className="text-lg">Thông tin sản phẩm</p>,
    render(item) {
      return "d"
    },
  },
  {
    title: <p className="text-lg">Đơn giá</p>,
    render(item) {
      return "test"
    }
  },
  {
    title: <p className="text-lg">Số lượng</p>,
    render(item) {
      return (
        <Input style={{ width: "80px" }} type="number" min={1} defaultValue={1} />
      )
    }
  },
  {
    title: <p className="text-lg">Thành tiền</p>,
    render(item) {
      return 100
    }
  },
];

const data = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
]

function ItemTable() {
  return (
    <div className="flex flex-col items-end gap-3">
      <Table className="w-full" pagination={{ hideOnSinglePage: true }} columns={columns} dataSource={data} />
      <div className="grid gap-3">
        <div className="flex w-full gap-2 justify-between text-lg">
          <p>Tổng tiền:</p>
          <p className="font-bold text-blue-500">20.000.000₫</p>
        </div>
        <Link to="/orders/checkout">
          <Button className="w-70 " size="large" variant="solid" color="geekblue">Thanh toán</Button>
        </Link>
      </div>
    </div>
  )
}

export default ItemTable