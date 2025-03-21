const { DatabaseQuery } = require("#server/database/index")
const { getUserByEmailQuery } = require("#server/model/Account")
const User = require("#server/model/User")

async function CheckUserAccount(req, res, next) {
  if (req.session.userId == null)
    return res.json({ message: "Invalid request!", success: false, data: null })

  try {
    const user = await User.findById(req.session.userId)
    res.locals.user = (await DatabaseQuery(getUserByEmailQuery, [[[user.email]]]))[0]

  } catch (error) {
    console.log(error)
    return res.json({ message: "Invalid request!", success: false, data: null })
  }

  next()
}

module.exports = {
  CheckUserAccount
}