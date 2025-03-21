// /api/customer-order
const { CheckUserAccount } = require('#server/middleware/customer-order/index')
const { GetOrderTourInfo, InsertTourInfo, CreateOrderTourErrorResponse, CheckSameOrderTourExists } = require('#server/middleware/customer-order/create')
const { getCustomerOrderList, createGetCustomerOrderListErrorResponse } = require('#server/middleware/customer-order/read')

const router = require('express').Router()

// GET /api/customer-order
router.get('/',
  CheckUserAccount,
  getCustomerOrderList,
  createGetCustomerOrderListErrorResponse)

// POST /api/customer-order
router.post('/',
  CheckUserAccount,
  CheckSameOrderTourExists,
  GetOrderTourInfo,
  InsertTourInfo,
  CreateOrderTourErrorResponse)

// PUT /api/customer-order
router.put('/', function (req, res) {
  res.send('dd')
})

// DELETE /api/customer-order
router.delete('/', function (req, res) {
  res.send('dd')
})

// POST /api/customer-order/checkout
router.post('/checkout', function (req, res) {
  res.send('dd')
})

module.exports = router