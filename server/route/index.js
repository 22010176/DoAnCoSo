// /api
const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/tour', require('./tours'))

router.use(function (req, res, next) {
  res.json({
    message: "Hello from server!",
    success: false,
    data: null
  })
})

module.exports = router