
async function CheckUserSession(req, res, next) {
  const { userId } = req.session

  if (userId == null) return res.json({
    message: "Invalid request!",
    success: false,
    data: null
  })
  next()
}

async function CheckOAuthUser(req, res, next) {
  const { user } = req
  // console.log(user)
  // return res.json(user)
  next()
}

async function CheckAdminRole(req, res, next) {



}

async function CheckGuessRole(req, res, next) { }



module.exports = {
  CheckOAuthUser,
  CheckUserSession
}