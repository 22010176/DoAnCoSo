// /api/tour
const { existsSync, mkdirSync } = require('fs')
const multer = require('multer')
const path = require('path')

const router = require('express').Router()

const uploadPath = path.resolve(__dirname, "../../public/storage")
if (!existsSync(uploadPath)) mkdirSync(uploadPath, { recursive: true })

const upload = multer({ dest: uploadPath, })

// POST /api/tour/create
router.post('/image',
  upload.any(),
  async function (req, res) {
    console.log(req.file)
    res.json({ mesage: "tét" })
  }
)

module.exports = router