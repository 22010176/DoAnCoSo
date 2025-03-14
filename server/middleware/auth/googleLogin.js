const { DatabaseQuery } = require("../../database")
const { createAccountQuery } = require("../../model/Account")



async function SaveGoogleAccountInfo(req, res, next) {
  const { user } = req
  if (!user) return res.json({
    success: false,
    message: "Fail",
    data: null
  })
  const { profile } = user

  // ho, ten, email, hinhAnh, soDienThoai
  const { familyName: ho, givenName: ten } = profile.name
  const email = profile.emails[0].value
  const hinhAnh = profile.photos[0].value
  const id = profile.id

  try {
    await DatabaseQuery(createAccountQuery, [[
      [id, ho, ten, email, hinhAnh, "", "2"]
    ]])
  } catch (error) {
    return res.json({
      success: false,
      message: "Fail",
      data: null
    })
  }

  next()
}

async function SaveOAuthInfo(req, res, next) {

  next()
}

async function CreateAccessToken(req, res, next) {

  next()
}

module.exports = {
  SaveOAuthInfo,
  SaveGoogleAccountInfo,
  CreateAccessToken
}