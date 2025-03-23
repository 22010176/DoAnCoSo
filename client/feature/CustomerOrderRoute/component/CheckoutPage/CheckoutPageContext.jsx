const { createContext, act } = require("react");

const CheckoutContext = createContext()


export const initialState = {
  orderList: [],
  form: {
    email: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    payment_method: "bank"
  }
}

export function reducer(state, action) {
  const _state = JSON.parse(JSON.stringify(state))
  const { type, payload } = action

  switch (type) {
    case 'updateOrderList':
      // console.log({ payload })
      _state.orderList = payload
      break

    case 'updateForm':
      _state.form[payload.name] = payload.value
      break
  }

  return _state
}

export default CheckoutContext