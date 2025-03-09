async function GetUserInfoByEmail(req, res, next) {
  next()
}

async function CheckPassword(req, res, next) {
  next()
}

async function GenereteAccessToken(req, res, next) {
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