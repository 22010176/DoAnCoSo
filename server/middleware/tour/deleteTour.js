const { DatabaseQuery } = require("#server/database/index")
const { deleteTourQuery } = require("#server/model/Tour")

async function DeleteTour(req, res, next) {
  console.log('ddd', req.body)
  try {
    await DatabaseQuery(deleteTourQuery, [req.body.id])
    return res.json({
      success: true,
      data: null,
      message: "Success"
    })
  } catch (error) {
    console.log(error)
  }
  next()
}

async function CreateDeleteTourErrorMessage(req, res, next) {
  res.json({
    message: "Failed",
    success: false,
    data: null
  })
}

module.exports = {
  DeleteTour,
  CreateDeleteTourErrorMessage
}