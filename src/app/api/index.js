// /api
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false, data: null })
})

module.exports = router
