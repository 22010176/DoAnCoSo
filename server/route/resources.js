// /api/resource
const router = require('express').Router()

// GET /api/resource/phuong-tien
router.get('/phuong-tien', async function (req, res) {
  res.json({ test: 'dd' })
})

// GET /api/resource/trang-thai-tour
router.get('/trang-thai-tour', async function (req, res) {
  res.json({ test: 'dd' })

})

// GET /api/resource/vai-tro
router.get('/vai-tro', async function (req, res) {
  res.json({ test: 'dd' })
})


module.exports = router