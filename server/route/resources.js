const { DatabaseQuery } = require('../database')
const { getVehiclesQuery } = require('../model/Vehicle')

// /api/resource
const router = require('express').Router()

// GET /api/resource/phuong-tien
router.get('/phuong-tien', async function (req, res) {
  try {
    const result = await DatabaseQuery(getVehiclesQuery)
    return res.json({
      message: "Success",
      success: true,
      data: result
    })
  } catch (error) { console.log(error) }
  res.json({ message: "Failed", success: false, data: null })
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