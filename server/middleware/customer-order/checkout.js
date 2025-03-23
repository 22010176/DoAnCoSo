const { DatabaseQuery } = require('#server/database/index')
const { insertCheckout, insertCheckoutItem } = require('#server/model/Checkout')
const { getCustomerOrdersList, deleteCustomerOrderList } = require('#server/model/CustomerOrder')
const Randomstring = require('randomstring')

// res.locals = { user }
async function getOrderItem(req, res, next) {
  try {
    const result = await DatabaseQuery(getCustomerOrdersList, [res.locals.user.id])
    if (result.length === 0) return res.json({
      message: "It cant be empty!!!",
      success: false,
      data: null
    })

    res.locals.orderItems = result

  } catch (error) {
    console.log(error)
    return res.json({
      message: "Cant not get checkout's items!",
      success: false,
      data: null
    })
  }

  next()
}

// res.locals = { user, orderItems }
async function CreateCheckout(req, res, next) {
  try {
    const { email, name, phone, address, note, payment_method, minhChungThanhToan } = req.body
    const { id: userId } = res.locals.user

    const checkoutId = "HoaDon-" + Randomstring.generate(10)
    await DatabaseQuery(insertCheckout, [[
      [checkoutId, email, name, phone, address, note, minhChungThanhToan, userId]
    ]])
    res.locals.checkoutId = checkoutId
  } catch (error) {
    console.log(error)
    return res.json({
      message: "Cant not create checkout!",
      success: false,
      data: null
    })
  }

  next()
}


// res.locals = { user, checkoutId, orderItems }
async function InsertOrderItem(req, res, next) {
  try {
    const { orderItems, checkoutId } = res.locals
    await DatabaseQuery(insertCheckoutItem, [
      orderItems.map(({ ngayDi, soNguoiLon, soTreEm, soEmBe, maTour }) => [
        "TourItem-" + Randomstring.generate(10), ngayDi, soNguoiLon, soTreEm, soEmBe, maTour, checkoutId
      ])
    ])
  } catch (error) {
    console.log(error)
    return res.json({
      message: "Cant not insert checkout's items!",
      success: false,
      data: null
    })
  }
  next()
}

// res.locals = { user, checkoutId, orderItems }
async function CleanUpCustomerCart(req, res, next) {
  console.log(res.locals)
  try {
    await DatabaseQuery(deleteCustomerOrderList, [res.locals.user.id])

    return res.json({ message: "Success", success: true, data: null })
  } catch (error) {
    console.log(error)
  }
  next()
}

async function CreateCheckoutErrorResponse(req, res, next) {
  res.json({
    message: "Fail",
    success: false,
    data: null
  })
}

module.exports = {
  CreateCheckout,
  getOrderItem,
  InsertOrderItem,
  CleanUpCustomerCart,
  CreateCheckoutErrorResponse
}

