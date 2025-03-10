const bcrypt = require('bcrypt')

const User = require('../../model/User_MongoDb')
const { DatabaseQuery } = require("../../database")
const { getUserByEmailQuery } = require("../../model/Account_MySQL")

async function GetUserInfoByEmail(req, res, next) {
  const { email } = req.body

  // const user = await DatabaseQuery(getUserByEmailQuery, [[[email]]])
  const result = await User.findOne({ email })

  console.log(result)
  if (!result) return res.json({
    success: false,
    message: "Cant find user.",
    data: null
  })

  res.locals.user = result
  next()
}

async function CheckPassword(req, res, next) {
  const { matKhau } = req.body
  const { user } = res.locals

  const result = await bcrypt.compare(matKhau, user.password)

  if (!result) return res.json({
    success: false,
    message: "Password or email is invalid.",
    data: null
  })

  res.locals.id = user._id
  next()
}

async function GenereteAccessToken(req, res, next) {
  try {
    req.session.userId = res.locals.id
    return res.json({
      success: true,
      message: "Successful login",
      data: null
    })
  } catch (error) { }

  next()
}

async function CreateResponse(req, res, next) {
  console.log("Create response")
  res.json({
    message: "login",
    success: true,
    data: null
  })
}

module.exports = {
  GetUserInfoByEmail,
  CheckPassword,
  GenereteAccessToken,
  CreateResponse
}