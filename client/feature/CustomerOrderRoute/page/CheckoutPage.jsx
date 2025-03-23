import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, message } from "antd"
import { useEffect, useReducer } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { CustomerOrderResource } from "@/Api"

import CheckoutContext, { initialState, reducer } from "../component/CheckoutPage/CheckoutPageContext"
import OrderItems from "../component/CheckoutPage/OrderItems"
import UserCheckoutForm from "../component/CheckoutPage/UserCheckoutForm"


function CheckoutPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [messageApi, contextHolder] = message.useMessage()
  const [state, dispatch] = useReducer(reducer, initialState)

  const total = state.orderList.reduce((acc, i) => acc + i.thanhTien, 0)
  const shipTotal = 40000

  useEffect(function () {
    CustomerOrderResource.get('/')
      .then(res => res.data)
      .then(data => dispatch({ type: "updateOrderList", payload: data.data }))

    return () => {
      console.log("unmount")
    }
  }, [location])

  async function onCheckout(e) {
    let result;
    try {
      result = await CustomerOrderResource.post('/checkout', state.form)
        .then(function (res) { return res.data })

    } catch (error) {
      return messageApi.error("Hệ thống không thể ghi nhận đơn hàng của bạn!")
    }

    if (!result.success) return messageApi.error("Hệ thống không thể ghi nhận đơn hàng của bạn!")

    messageApi.info("Đã ghi nhận đơn hàng của bạn!")
    setTimeout(function () {
      navigate('/')
    }, 1500)
  }

  return (
    <CheckoutContext.Provider value={[state, dispatch]}>
      {contextHolder}
      <div className="w-screen h-screen  grid xl:grid-cols-[3fr_2fr] bg-gray-50 overflow-x-hidden">
        <div className="p-15 flex flex-col gap-5">
          <p className="text-4xl font-bold text-blue-500 ">ChillTravel </p>
          <OrderItems className="xl:hidden block" />
          <UserCheckoutForm />
        </div>

        <div className="bg-gray-100 p-5 flex flex-col h-full border-l-2 border-gray-200">
          <OrderItems className="xl:block hidden" />

          <div className="flex flex-col gap-2 text-lg border-b-2 border-gray-200 py-5">
            <div className="flex justify-between items-center">
              <p className="font-bold">Tạm tính</p>
              <p>{total}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Phí vận chuyển</p>
              <p>{shipTotal}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-lg border-b-2 border-gray-200 py-5">
            <div className="flex justify-between items-center text-2xl">
              <p className="text-gray-600">Tổng cộng</p>
              <p className="font-semibold text-blue-500">{total + shipTotal}</p>
            </div>
            <div className="flex justify-between items-center">
              <Link to="/orders"><FontAwesomeIcon icon={faCaretLeft} /> Quay về giỏ hàng</Link>
              <Button onClick={onCheckout} variant="solid" color="blue" size="large" className="uppercase w-40">ĐẶT HÀNG</Button>
            </div>
          </div>

        </div>
      </div>
    </CheckoutContext.Provider>
  )
}

export default CheckoutPage