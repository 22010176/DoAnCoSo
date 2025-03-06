const router = require('express').Router()




router.use(function (req, res) {
  res.json({ message: "Hello from server" })
})

module.exports = router