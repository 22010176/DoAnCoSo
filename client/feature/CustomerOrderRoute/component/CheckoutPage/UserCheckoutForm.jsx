import { faMoneyCheckDollar, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"

function CheckboxOption({ title, affix }) {
  return (
    <div className="text-lg flex items-center justify-between border gap-2 rounded-xl p-5 border-gray-300 bg-white">
      <div className="flex gap-2 items-center">
        <Radio />
        <p className="">{title}</p>
      </div>
      {affix}
    </div>
  )
}

function UserCheckoutForm() {
  return (
    <form className="grid gap-10 md:grid-cols-[1fr_auto]">
      <div className="flex flex-col gap-5">
        <div className="2xl:flex-row flex-col flex justify-between 2xl:items-baseline">
          <p className="font-bold text-2xl ">Thông tin nhận hàng</p>
          <p className="text-gray-500 text-lg">Mã đơn hàng: adsfsafsafd</p>
        </div>
        <Input size="large" placeholder="email" />
        <Input size="large" placeholder="Họ và tên" />
        <Input size="large" placeholder="Số điện thoại" />
        <Input size="large" placeholder="Địa chỉ" />
        <Select size="large" placeholder="Tỉnh thành" />
        <Select size="large" placeholder="Quận huyện" />
        <Select size="large" placeholder="Phường xã" />
        <TextArea placeholder="Ghi chú. . ." autoSize={{ minRows: 4, maxRows: 8 }} />
      </div>

      <div className="flex flex-col gap-5 min-w-80">
        <div>
          <p className="text-xl font-bold mb-3">Vận chuyển</p>
          <CheckboxOption title="Giao hàng tận nơi" affix={<p className="">40.000₫</p>} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">Thanh toán</p>
          <CheckboxOption title="Chuyển khoản" affix={<FontAwesomeIcon icon={faTruck} />} />
          <CheckboxOption title="Thu hộ (COD)" affix={<FontAwesomeIcon icon={faMoneyCheckDollar} />} />
        </div>
      </div>
    </form>
  )
}

export default UserCheckoutForm