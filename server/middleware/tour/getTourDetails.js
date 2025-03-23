const { DatabaseQuery } = require('../../database')
const { getTourInfoQuery, getTourImageQuery, getTourScheduleQuery, getTourInfoQuery2 } = require('../../model/Tour')
const { getUserFromSession } = require('../authorizeUser')

async function getTourInfo(req, res, next) {
  console.log(req.params)
  try {
    const user = await getUserFromSession(req)
    if (user?.id)
      res.locals.tourInfo = (await DatabaseQuery(getTourInfoQuery, [user.id, req.params.tourId]))[0]
    else
      res.locals.tourInfo = (await DatabaseQuery(getTourInfoQuery2, [req.params.tourId]))[0]
  } catch (error) {
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