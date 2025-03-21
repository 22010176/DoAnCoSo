const { v4 } = require("uuid")
const Randomstring = require("randomstring")


const { insertTourQuery, insertImageQuery, insertTourScheduleQuery } = require("../../model/Tour")
const { DatabaseQuery } = require("../../database")

async function SaveTourInfo(req, res, next) {
  try {
    const id = "Tour-" + Randomstring.generate(5)
    const { info } = req.body
    const { tenTour, xuatPhat, diemDen, phuongTien, giaNguoiLon, giaTreEm, giaEmBe, moTa } = info
    await DatabaseQuery(insertTourQuery,
      [[[
        id, tenTour, giaNguoiLon, giaTreEm, giaEmBe, xuatPhat, diemDen, phuongTien, moTa
      ]]])
    res.locals.tour = id
  } catch (error) {
    console.log(error)
    return res.json({
      message: "Error create tour",
      success: false,
      data: null
    })
  }
  next()
}

async function SaveTourImages(req, res, next) {
  try {
    const images = req.body.images.map(i => [v4(), i, res.locals.tour])
    await DatabaseQuery(insertImageQuery, [images])
  } catch (error) {
    return res.json({
      message: "Error insert images",
      success: false,
      data: null
    })
  }
  next()
}

async function SaveTourSchedule(req, res, next) {
  try {
    const schedules = req.body.schedules.map(({ index, title, content }) => [
      v4(), index + 1, title, content, res.locals.tour
    ])
    await DatabaseQuery(insertTourScheduleQuery, [schedules])
    return res.json({
      message: "Successful",
      success: true,
      data: res.locals.tour

    })
  } catch (error) {
    return res.json({
      message: "Error insert schedules",
      success: false,
      data: null
    })
  }
  next()
}


async function CreateCreateTourErrorResponse(req, res, next) {
  res.json(req.body)
}

module.exports = {
  CreateCreateTourErrorResponse,
  SaveTourImages,
  SaveTourInfo,
  SaveTourSchedule
}