const Randomstring = require("randomstring")

const { DatabaseQuery } = require("#server/database/index")
const { insertCustomerOrder } = require("#server/model/CustomerOrder")
const { getTourInfoQuery } = require("#server/model/Tour")
const User = require("#server/model/User")
const { GetUserInfoByEmail } = require("../auth/local/loginUser")
const { getUserByEmailQuery } = require("#server/model/Account")

async function CheckUserAccount(req, res, next) {
  if (req.session.userId == null)
    return res.json({ message: "Invalid request!", success: false, data: null })

  try {
    const user = await User.findById(req.session.userId)
    res.locals.user = (await DatabaseQuery(getUserByEmailQuery, [[[user.email]]]))[0]

  } catch (error) {
    return res.json({ message: "Invalid request!", success: false, data: null })
  }

  next()
}

function CheckSameOrderTourExists(req, res, next) {
  next()
}

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

async function InsertTourInfo(req, res, next) {
  const userId = res.locals.user.id
  const id = "CustomrCart-" + Randomstring.generate(10)
  const { tour, date, nguoiLon, emBe, treEm } = req.body

  try {
    await DatabaseQuery(insertCustomerOrder, [[
      [id, date, nguoiLon, treEm, emBe, tour, userId]
    ]])

    return res.json({ message: "Success", success: true, data: id })
  } catch (error) {
    console.log(error)
  }

  next()
}

async function CreateOrderTourErrorResponse(req, res, next) {
  res.json({
    message: "Failed",
    success: false,
    data: null
  })
}

module.exports = {
  CheckUserAccount,
  CheckSameOrderTourExists,
  GetOrderTourInfo,
  InsertTourInfo,
  CreateOrderTourErrorResponse
}