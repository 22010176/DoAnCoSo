const bcrypt = require('bcrypt')

const User = require('../../model/User')

async function GetUserInfoByEmail(req, res, next) {
  const { email } = req.body

  // const user = await DatabaseQuery(getUserByEmailQuery, [[[email]]])
  const result = await User.findOne({ email })

  console.log({ result })
  if (result == null) return res.json({
    success: false,
    message: "Cant find user.",
    data: null
  })

  res.locals.user = result
  next()
}

async function CheckPassword(req, res, next) {
  const { password } = req.body
  const { user } = res.locals
  try {
    const result = await bcrypt.compare(password, user.password)

    if (!result) throw new Error("dd")
  } catch {
    return res.json({
      success: false,
      message: "Password or email is invalid.",
      data: null
    })
  }

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