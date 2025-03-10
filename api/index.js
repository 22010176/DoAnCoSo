const router = require('express').Router()

router.use('/account', require('./route/_authenticate'),)

router.use(function (req, res, next) {
  res.json({
    message: "Hello from server!",
    success: true,
    data: null
  })
})

module.exports = router