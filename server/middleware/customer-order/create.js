const Randomstring = require("randomstring")

const User = require("#server/model/User")
const { DatabaseQuery } = require("#server/database/index")

const { getTourInfoQuery } = require("#server/model/Tour")
const { getUserByEmailQuery } = require("#server/model/Account")

const { insertCustomerOrder, getCustomerOrderTour, updateCustomerOrderTour } = require("#server/model/CustomerOrder")

// res.locals = { user, }
async function CheckSameOrderTourExists(req, res, next) {
  const { tour, date, nguoiLon, treEm, emBe } = req.body
  const userId = res.locals.user.id

  try {
    const currentTour = Object.values((await DatabaseQuery(getCustomerOrderTour, [userId, tour]))
      .reduce((acc, cur) => {
        acc[cur.tour] = cur
        return acc
      }, {}))[0]
    if (currentTour == null) return next()

    const { id, ngayDat } = currentTour
    await DatabaseQuery(updateCustomerOrderTour, [
      ngayDat, date, +nguoiLon, +treEm, +emBe, id
    ])

    return res.json({ message: "Update Success", success: true, data: id })
  } catch (error) { console.log(error) }

  next()
}

// res.locals = { user, }
async function GetOrderTourInfo(req, res, next) {
  // console.log(req.body)
  // try {
  //   const result = await DatabaseQuery(getTourInfoQuery, req.body?.tour)
  //   res.locals.tourInfo = result
  // } catch (error) {
  //   console.log(error)
  //   return res.json({ message: "Failed", success: false, data: null })
  // }
  next()
}

// res.locals = { user, tourInfo }
async function InsertTourInfo(req, res, next) {
  const userId = res.locals.user.id
  const id = "CustomrCart-" + Randomstring.generate(10)
  const { tour, date, nguoiLon, emBe, treEm } = req.body

  try {
    await DatabaseQuery(insertCustomerOrder, [[
      [id, date, nguoiLon, treEm, emBe, tour, userId]
    ]])

    return res.json({ message: "Success", success: true, data: id })
  } catch (error) { console.log(error) }

  next()
}

// res.locals = { user, tourInfo }
async function CreateOrderTourErrorResponse(req, res, next) {
  res.json({
    message: "Failed",
    success: false,
    data: null
  })
}

module.exports = {
  CheckSameOrderTourExists,
  GetOrderTourInfo,
  InsertTourInfo,
  CreateOrderTourErrorResponse
}