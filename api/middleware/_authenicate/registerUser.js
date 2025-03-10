const bcrypt = require('bcrypt')
const { v4 } = require('uuid')

const { getUserByEmailQuery, createAccountQuery } = require("../../model/Account_MySQL")
const { DatabaseQuery } = require("../../database")
const User = require('../../model/User_MongoDb')

async function CheckEmailFormat(req, res, next) {
  const { email } = req.body
  // console.log("Check email format")
  next()
}

async function CheckEmailExists(req, res, next) {
  const { email } = req.body
  const result = await DatabaseQuery(getUserByEmailQuery, [[[email]]])

  if (result.length > 0) return res.json({
    success: false,
    message: "Email already exists!",
    data: null
  })

  next()
}

async function CheckPhoneNumber(req, res, next) {
  const { soDienThoai } = req.body;

  if (isNaN(soDienThoai)) return res.json({
    success: false,
    message: "Invalid phone number. Found characters.",
    data: null
  })

  next()
}

async function HashPassword(req, res, next) {
  console.log("Hash password")
  const { matKhau } = req.body
  console.log(matKhau)
  if (matKhau == null || matKhau.length === 0) return res.json({
    success: false,
    message: "Invalid password.",
    data: null
  })

  res.locals.matKhau_hash = await bcrypt.hash(matKhau, 12)
  next()
}

async function CreateUserInfo(req, res, next) {
  const { ho, ten, email, soDienThoai } = req.body

  // console.log(matKhau_hash, ho, ten, email, soDienThoai)
  try {
    const id = v4()
    await DatabaseQuery(createAccountQuery, [[
      [id, ho, ten, email, undefined, soDienThoai, '2']
    ]])
    res.locals.id = id
  } catch (error) { res.locals.error = error }

  next()
}

async function CreateAccountUser(req, res, next) {
  const { matKhau_hash, id } = res.locals
  const { email } = req.body
  try {
    const newUser = new User({ email, password: matKhau_hash })
    await newUser.save()

    return res.json({
      success: true,
      message: "Create account successufl",
      data: { id }
    })
  } catch (error) { res.locals.error = error }

  next()
}
async function CreateRegisterErrorResponse(req, res, next) {
  // console.log("Create response")
  res.json({
    message: "Fail create your account.",
    success: false,
    data: null
  })
}

module.exports = {
  CheckEmailFormat,
  CheckEmailExists,
  CheckPhoneNumber,
  HashPassword,
  CreateUserInfo,
  CreateAccountUser,
  CreateRegisterErrorResponse
}