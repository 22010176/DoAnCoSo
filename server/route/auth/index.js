// /api/auth
const router = require('express').Router()

router.use('/local', require('./local'))
router.use('/google', require('./google'))

// get /api/auth/info
router.get('/info',
  async function (req, res) {
    // console.log(req.session)
    res.json(req.session)
  }
)

module.exports = router