import { faMoneyCheckDollar, faPlus, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Flex, Input, QRCode, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useContext } from "react"
import CheckoutContext from "./CheckoutPageContext"
import { CustomerOrderResource } from "@/Api"

function CheckboxOption({ title, name, value, affix, checked, onChangeEvent }) {
  function onChange(e) {
    try {
      onChangeEvent(e)
    } catch (error) { }
  }
  return (
    <div className="text-lg flex items-center justify-between border gap-2 rounded-xl p-3 border-gray-300 bg-white">
      <div className="flex gap-2 items-center">
        <Radio name={name} checked={checked} value={value} onChange={onChange} />
        <p >{title}</p>
      </div>
      {affix}
    </div>
  )
}

function UserCheckoutForm() {
  const [state, dispatch] = useContext(CheckoutContext)

  function onChange(e) {
    const elem = e.target

    const { name, value } = elem
    dispatch({
      type: "updateForm",
      payload: { name, value }
    })
  }

  async function onUpload(e) {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('image', file); // Append the file to FormData

    try {
      const response = await CustomerOrderResource.post('/checkout-image',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' }, })
        .then(res => res.data);

      console.log('Upload success:', response.data);
      dispatch({
        type: "updateForm",
        payload: { name: "image_payment", value: response.data }
      })
    } catch (error) {
      console.error('Upload error:', error);
    }
    console.log(file)
  }

  return (
    <form className="grid gap-10 md:grid-cols-[1fr_auto]">
      <div className="flex flex-col gap-5">
        <div className="2xl:flex-row flex-col flex justify-between 2xl:items-baseline">
          <p className="font-bold text-2xl ">Thông tin nhận hàng</p>
          {/* <p className="text-gray-500 text-lg">Mã đơn hàng: adsfsafsafd</p> */}
        </div>

        <Input value={state.form?.email} name="email" size="large" placeholder="email" onChange={onChange} />
        <Input value={state.form?.name} name="name" size="large" placeholder="Họ và tên" onChange={onChange} />
        <Input value={state.form?.phone} name="phone" size="large" placeholder="Số điện thoại" onChange={onChange} />
        <Input value={state.form?.address} name="address" size="large" placeholder="Địa chỉ" onChange={onChange} />
        {/* <Select size="large" placeholder="Tỉnh thành" />
        <Select size="large" placeholder="Quận huyện" />
        <Select size="large" placeholder="Phường xã" /> */}
        <TextArea value={state.form?.note} name="note" placeholder="Ghi chú. . ." autoSize={{ minRows: 4, maxRows: 8 }} onChange={onChange} />


      </div>

      <div className="flex flex-col gap-5 min-w-80">
        {/* <div>
          <p className="text-xl font-bold mb-3">Vận chuyển</p>
          <CheckboxOption title="Giao hàng tận nơi" affix={<p className="">40.000₫</p>} />
        </div> */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">Thanh toán</p>

          <CheckboxOption
            value="bank"
            title="Chuyển khoản"
            name="payment_method"
            checked={state.form?.payment_method === 'bank'}
            affix={<FontAwesomeIcon icon={faTruck} />}
            onChangeEvent={onChange} />

          <CheckboxOption
            value="cod"
            title="Thu hộ (COD)"
            name="payment_method"
            checked={state.form?.payment_method === 'cod'}
            affix={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
            onChangeEvent={onChange} />
        </div>

        {state.form.payment_method === 'bank' && (
          <div className="flex flex-col gap-5">
            <label className="flex gap-2 items-center font-bold text-xl" htmlFor="prove">
              <p>Minh chứng thanh toán</p>
              <FontAwesomeIcon className="ml-2" icon={faPlus} />
            </label>

            <QRCode type="svg" value="https://ant.design/" />
            <input id="prove" className="hidden" type="file" accept="image/*" onChange={onUpload} />

            <img className="w-50 h-auto" src={state.form?.image_payment} alt="" />
          </div>
        )}
      </div>
    </form>
  )
}

export default UserCheckoutForm