// /api/customer-order
const multer = require('multer')
const path = require('path')
const { v4 } = require('uuid')

const { CheckUserAccount } = require('#server/middleware/customer-order/index')
const { GetOrderTourInfo, InsertTourInfo, CreateOrderTourErrorResponse, CheckSameOrderTourExists } = require('#server/middleware/customer-order/create')
const { getCustomerOrderList, createGetCustomerOrderListErrorResponse } = require('#server/middleware/customer-order/read')
const { paymentFolder, publicFolder } = require('#server/constant')

const router = require('express').Router()

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, paymentFolder); // Lưu vào thư mục 'uploads/'
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + v4() + path.extname(file.originalname));
    }
  })
})

// POST /api/customer-order/checkout-image
router.post('/checkout-image',
  upload.single('image'),
  function (req, res) {
    res.json({
      mesage: "Success",
      success: true,
      data: "\\" + path.relative(publicFolder, req.file.path)
    })
  }
)


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