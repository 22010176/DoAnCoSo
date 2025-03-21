// /api
const router = require('express').Router()

router.use(function (req, res, next) {
  // console.log("user session", req.session)

  next()
})

router.use('/auth', require('./auth'))
router.use('/tour', require('./tours'))
router.use('/resource', require('./resources'))
router.use('/customer-order', require('./customer-order'))

module.exports = router