const { getOAuthUserByIdQuery, createOAuthUserQuery, updateRefreshTokenByIdQuery } = require("../../../model/OAuthUser")

const { DatabaseQuery } = require("../../../database")
const { createAccountQuery, getUserByEmailQuery } = require("../../../model/Account")

async function CheckAccount(req, res, next) {
  const { user } = req
  if (!user) return res.json({
    success: false,
    message: "Fail",
    data: null
  })

  next()
}

async function SaveGoogleAccountInfo(req, res, next) {
  console.log('ddddd', req.user)
  // const { profile: { _json: user } } = req.user

  // const { sub, name, given_name, family_name, picture, email } = user

  // try {
  //   const check = await DatabaseQuery(getUserByEmailQuery, [[[email]]])
  //   // console.log(check)
  //   if (check.length > 0) return next()

  //   await DatabaseQuery(createAccountQuery, [[
  //     [sub, family_name, given_name, email, picture, null]
  //   ]])
  // } catch (error) {
  //   console.log(error)
  //   return res.json({ success: false })
  // }

  next()
}

async function SaveOAuthInfo(req, res, next) {
  // const { profile: { _json: user, provider }, refreshToken } = req.user

  // const { sub, name, given_name, family_name, picture, email } = user
  // try {
  //   const result = await DatabaseQuery(getOAuthUserByIdQuery, [[[sub]]])

  //   if (result.length == 0)
  //     await DatabaseQuery(createOAuthUserQuery, [[
  //       [sub, provider, refreshToken, sub]
  //     ]])

  //   await DatabaseQuery(updateRefreshTokenByIdQuery, [refreshToken, sub])
  // } catch (error) {
  //   console.log(error)
  //   return res.json({ success: false })
  // }

  next()
}

async function CreateAccessToken(req, res, next) {
  req.session.accessToken = req.user.accessToken
  next()
}

module.exports = {
  CheckAccount,
  SaveOAuthInfo,
  SaveGoogleAccountInfo,
  CreateAccessToken
}