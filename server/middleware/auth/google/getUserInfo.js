const { DatabaseQuery } = require("../../../database")
const { getUserByEmailQuery } = require("../../../model/Account")
const User = require("../../../model/User")

async function GetOAuthUserInfo(req, res, next) {
  next()
}

async function GetUserInfo(req, res, next) {
  const userAuth = await User.findById(req.session.userId)
  const userInfo = await DatabaseQuery(getUserByEmailQuery, [[[userAuth?.email]]])

  res.json({
    message: "Successful",
    success: userInfo.length > 0,
    data: userInfo
  })
}

module.exports = {
  GetOAuthUserInfo,
  GetUserInfo,
}