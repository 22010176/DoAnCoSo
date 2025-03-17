// /api/tour

const { CreateCreateTourErrorResponse, SaveTourImages, SaveTourInfo, SaveTourSchedule } = require('../middleware/tour/createTour')

const { v4 } = require('uuid')
const { existsSync, mkdirSync, read, writeFileSync } = require('fs')
const multer = require('multer')
const path = require('path')

const router = require('express').Router()
const { publicFolder, resourceFolder } = require('../constant')

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, resourceFolder); // Lưu vào thư mục 'uploads/'
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + v4() + path.extname(file.originalname));
    }
  })
})

// POST /api/tour/upload-image
router.post('/upload-image',
  upload.single('image'),
  function (req, res) {
    res.json({
      mesage: "Success",
      success: true,
      data: "\\" + path.relative(publicFolder, req.file.path)
    })
  })

// POST /api/tour/create
router.post('/create',
  SaveTourInfo,
  SaveTourImages,
  SaveTourSchedule,
  CreateCreateTourErrorResponse
)

module.exports = router