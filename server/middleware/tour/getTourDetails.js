const { DatabaseQuery } = require('../../database')
const { getTourInfoQuery, getTourImageQuery, getTourScheduleQuery } = require('../../model/Tour')

async function getTourInfo(req, res, next) {
  try {
    res.locals.tourInfo = (await DatabaseQuery(getTourInfoQuery, req.params.tourId))[0]
  } catch (error) {
    res.locals.tourInfo = {}
    console.log(error)
  }
  next()
}

async function getTourImage(req, res, next) {
  try {
    res.locals.tourImages = await DatabaseQuery(getTourImageQuery, req.params.tourId)
  } catch (error) {
    res.locals.tourImages = []
    console.log(error)
  }
  next()
}

async function getTourScheduleInfo(req, res, next) {
  try {
    res.locals.tourSchedules = await DatabaseQuery(getTourScheduleQuery, req.params.tourId)
  } catch (error) {
    res.locals.tourSchedules = []
    console.log(error)
  }
  next()
}

async function CreateReponseMessage(req, res, next) {
  const { tourInfo, tourImages, tourSchedules } = res.locals
  res.json({
    message: "Success",
    success: true,
    data: {
      info: tourInfo,
      images: tourImages,
      schedules: tourSchedules
    }
  })
}

module.exports = {
  getTourInfo,
  getTourImage,
  getTourScheduleInfo,
  CreateReponseMessage
}