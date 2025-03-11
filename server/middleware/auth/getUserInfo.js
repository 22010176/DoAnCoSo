const { DatabaseQuery } = require("../../database")
const { getUserByEmailQuery } = require("../../model/Account")
const User = require("../../model/User")

async function GetUserInfo(req, res, next) {
  const userAuth = await User.findById(req.session.userId)
  const userInfo = await DatabaseQuery(getUserByEmailQuery, [[[userAuth.email]]])

  res.json({
    message: "Successful",
    success: true,
    data: userInfo
  })
}

module.exports = {
  GetUserInfo,
}