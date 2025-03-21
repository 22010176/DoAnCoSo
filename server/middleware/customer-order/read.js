const { DatabaseQuery } = require("#server/database/index")
const { getCustomerOrdersList } = require("#server/model/CustomerOrder")

// res.locals = { user,}
async function getCustomerOrderList(req, res, next) {
  try {
    const result = await DatabaseQuery(getCustomerOrdersList, [res.locals.user.id])
    console.log(result)

    return res.json({ message: "Success", success: true, data: result })
  }
  catch (error) {
    console.log(error)
  }
  next()
}

async function createGetCustomerOrderListErrorResponse(req, res, next) {
  res.json({
    message: "Failed",
    success: false,
    data: null
  })
}

module.exports = {
  getCustomerOrderList,
  createGetCustomerOrderListErrorResponse
}