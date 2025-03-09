const returnResult = require('./middleware')

const router = require('express').Router()



router.use(function (req, res, next) {
  res.locals.result = {
    message: "Hello from server!",
    success: true,
    data: null
  }
  next()
})

router.use(returnResult)

module.exports = router