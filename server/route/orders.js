// /api/orders

const { CheckUserAccount } = require('#server/middleware/customer-order/index')
const { getOrderInfo, createGetOrderDetailError, getUserOrder, getOrderTour } = require('#server/middleware/orders/getOrderDetail')
const { getAllOrders, createGetOrderListErrorResponse } = require('#server/middleware/orders/getOrdersList')

const router = require('express').Router()

// GET /api/orders
router.get('/',
  CheckUserAccount,
  getAllOrders,
  createGetOrderListErrorResponse)

// GET /api/orders/:orderId
router.get('/:orderId',
  CheckUserAccount,
  // getUserOrder,
  getOrderInfo,
  getOrderTour,
  createGetOrderDetailError)

module.exports = router