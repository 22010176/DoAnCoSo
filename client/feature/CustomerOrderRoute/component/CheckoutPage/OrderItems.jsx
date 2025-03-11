import { Button, Collapse, ConfigProvider, Input } from "antd"
import TourOrder from "@/component/TourInfo/TourOrder"

function OrderItem() {
  return (
    <div className="overflow-auto h-50 flex grow flex-col gap-5 py-3 px-1 border-2 -mt-2 border-gray-300">
      {new Array(50).fill().map((i, j) => (
        <TourOrder key={j} />
      ))}
    </div>
  )
}

const theme = {
  components: {
    Collapse: {
      /* here is your component tokens */
      headerPadding: "10px 0px"
    },
  },
}

function OrderItems({ className }) {

  return (
    <ConfigProvider theme={theme}>
      <div className={className}>
        <Collapse bordered ghost items={[{
          key: "1",
          label: <p className="w-full text-2xl font-bold ">Đơn hàng (6 sản phẩm)</p>,
          children: <OrderItem />,
          showArrow: false,
        }]} defaultActiveKey="1" />
        <div className="grid grid-cols-[1fr_auto] gap-5 p-5 border-b-2 border-gray-200">
          <Input size="large" placeholder="Nhập mã giảm giá" />
          <Button size="large" color="blue" variant="solid">Áp dụng</Button>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default OrderItems