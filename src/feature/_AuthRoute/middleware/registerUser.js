async function CheckEmailFormat(req, res, next) {
  console.log("Check email format")
  next()
}

async function CheckEmailExists(req, res, next) {
  console.log("Check email exist")
  next()
}

async function HashPassword(req, res, next) {
  console.log("Hash password")
  next()
}

async function CheckPhoneNumber(req, res, next) {
  console.log("Check phone number")
  next()
}

async function CreateUser(req, res, next) {
  console.log("Create user")
  next()
}

async function CreateRegisterResponse(req, res, next) {
  console.log("Create response")
  res.json({
    message: "register",
    success: true,
    data: null
  })
}

module.exports = {
  CheckEmailFormat,
  CheckEmailExists,
  HashPassword,
  CreateUser,
  CheckPhoneNumber,
  CreateRegisterResponse
}