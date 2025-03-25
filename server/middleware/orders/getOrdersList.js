const { DatabaseQuery } = require("#server/database/index");
const { getOrderListQuery } = require("#server/model/Orders");

async function getAllOrders(req, res, next) {
  try {
    const result = await DatabaseQuery(getOrderListQuery)
    return res.json({
      message: "Success",
      success: true,
      data: result
    })
  } catch (error) {
    console.log(error)
  }
  next()
}

async function createGetOrderListErrorResponse(req, res, next) {
  res.json({
    message: "Failed",
    success: false,
    data: null
  })
}

module.exports = {
  getAllOrders,
  createGetOrderListErrorResponse
}