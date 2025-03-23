// /api/tour
const { v4 } = require('uuid')
const multer = require('multer')
const path = require('path')

const { publicFolder, resourceFolder } = require('../constant')

const router = require('express').Router()
const { CreateCreateTourErrorResponse, SaveTourImages, SaveTourInfo, SaveTourSchedule } = require('../middleware/tour/createTour')
const { getTourList } = require("../middleware/tour/tourList")
const { CreateReponseMessage, getTourImage, getTourInfo, getTourScheduleInfo } = require('../middleware/tour/getTourDetails')
const { getTourCustomerQuery } = require('../model/Tour')
const { DatabaseQuery } = require('../database')

const { GetCustomerTourList } = require('#server/middleware/tour/customer')
const { CheckUser, InsertTourFavourite, CreateAddFavouriteErrorResponse } = require('#server/middleware/tour/addFavourite')
const { DeleteTourFavourite, CreateDeleteFavouriteErrorResponse } = require('#server/middleware/tour/deleteFavourite')
const { getFavouriteTour, CreateGetFavTourErrorResponse } = require('#server/middleware/tour/getFavourite')

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

// GET /api/tour/list
router.get('/list',
  getTourList
)

// GET /api/tour/details/:tourId
router.get('/details/:tourId',
  getTourInfo,
  getTourImage,
  getTourScheduleInfo,
  CreateReponseMessage
)

// GET /api/tour/customer
router.get('/customer',
  // authorize route

  // Un authorize route
  GetCustomerTourList
)

// GET /api/tour/customer/:tourId
router.get('/customer/:tourId',
  getTourInfo,
  getTourImage,
  getTourScheduleInfo,
  CreateReponseMessage
)

// GET /api/tour/favourite
router.get('/favourite',
  CheckUser,
  getFavouriteTour,
  CreateGetFavTourErrorResponse
)

// POST /api/tour/favourite
router.post('/favourite',
  CheckUser,
  InsertTourFavourite,
  CreateAddFavouriteErrorResponse)

// DELETE /api/tour/favourite
router.delete('/favourite',
  CheckUser,
  DeleteTourFavourite,
  CreateDeleteFavouriteErrorResponse)

module.exports = router