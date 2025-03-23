import { CustomerOrderResource } from "@/Api";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const columns = [
  {
    title: <p className="text-lg"></p>,
    render(item) {
      return (
        <Button size="small" variant="solid" color="red"><FontAwesomeIcon icon={faX} /></Button>
      )
    },
    width: "5%"
  },
  {
    title: <p className="text-lg">Thông tin sản phẩm</p>,
    render(item) { return item.tenTour },
    width: "25%"
  },
  {
    title: <p className="text-lg">Đơn giá</p>,
    render(item) {
      return (
        <div className="grid grid-cols-3 gap-2 items-center text-center">
          <div>
            <p className="font-semibold">Người lớn</p>
            <p>{item.giaNguoiLon}</p>
          </div>
          <div>
            <p className="font-semibold">Trẻ em</p>
            <p>{item.giaTreEm}</p>
          </div>
          <div>
            <p className="font-semibold">Em bé</p>
            <p>{item.giaEmBe}</p>
          </div>
        </div>
      )
    },
    width: "30%"
  },
  {
    title: <p className="text-lg">Số lượng</p>,
    render(item) {
      return (
        <div className="flex gap-2">
          <div>
            <label className="font-semibold">Người lớn</label>
            <Input disabled size="small" type="number" min={1} value={item.soNguoiLon} />
          </div>
          <div>
            <label className="font-semibold">Trẻ em</label>
            <Input disabled size="small" type="number" min={1} value={item.soTreEm} />
          </div>
          <div>
            <label className="font-semibold">Em bé</label>
            <Input disabled size="small" type="number" min={1} value={item.soEmBe} />
          </div>
        </div>
      )
    },
    width: "30%"
  },
  {
    title: <p className="text-lg">Thành tiền</p>,
    render(item) { return item.thanhTien },
    width: "15%"
  },

];

function ItemTable() {
  const location = useLocation()
  const [list, setList] = useState([])

  useEffect(function () {
    CustomerOrderResource.get('/')
      .then(res => res.data)
      .then(data => setList(data.data.map((i, j) => ({ ...i, key: j }))))

    return () => {
      console.log("unmount")
    }
  }, [location])
  console.log(list)

  return (
    <div className="flex flex-col items-end gap-3">
      <Table
        className="w-full"
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={list} />

      <div className="grid gap-3">
        <div className="flex w-full gap-2 justify-between text-lg">
          <p>Tổng tiền:</p>
          <p className="font-bold text-blue-500">{list.reduce((acc, i) => acc + i.thanhTien, 0)}</p>
        </div>
        <Link to="/orders/checkout">
          <Button className="w-70 " size="large" variant="solid" color="geekblue">Thanh toán</Button>
        </Link>
      </div>
    </div>
  )
}

export default ItemTable