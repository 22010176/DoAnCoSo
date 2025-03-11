// /api
const router = require('express').Router()

router.use('/auth', require('./_authenticate'))

router.use(function (req, res, next) {
  res.json({
    message: "Hello from server!",
    success: true,
    data: null
  })
})

module.exports = router