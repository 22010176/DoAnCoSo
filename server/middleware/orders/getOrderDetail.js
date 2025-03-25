const { DatabaseQuery } = require("#server/database/index")
const { getOrderDetailQuery, getOrderListItemQuery } = require("#server/model/Orders")

async function getUserOrder(req, res, next) {
  try {
    console.log(res.locals.user)
  } catch (error) {

  }
  next()
}

// res.locals = { user }
async function getOrderInfo(req, res, next) {
  try {
    const { orderId } = req.params
    res.locals.order = (await DatabaseQuery(getOrderDetailQuery, [orderId]))[0]
  } catch (error) {
    console.log(error)
    return res.json({
      message: "Cant not get order's info",
      success: false,
      data: null
    })
  }
  next()
}

async function getOrderTour(req, res, next) {
  try {
    const { orderId } = req.params
    const result = await DatabaseQuery(getOrderListItemQuery, [orderId])
    res.locals.tours = result
    return res.json({
      data: res.locals,
      success: true,
      message: "Success"
    })
  }
  catch (err) { console.log(err) }
  next()
}

async function createGetOrderDetailError(req, res, next) {
  res.json({
    message: "Error",
    success: false,
    data: null
  })
}

module.exports = {
  getUserOrder, getOrderInfo, getOrderTour, createGetOrderDetailError
}