const { getUserFromSession } = require("../authorizeUser")

async function CheckUserAccount(req, res, next) {
  try {
    res.locals.user = await getUserFromSession(req)

    if (res.locals.user == null)
      return res.json({ message: "Invalid request!", success: false, data: null })
  } catch (error) {
    console.log(error)
    return res.json({ message: "Invalid request!", success: false, data: null })
  }

  next()
}

module.exports = {
  CheckUserAccount
}