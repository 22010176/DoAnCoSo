
async function CheckUserSession(req, res, next) {
  const { userId } = req.session

  if (userId == null) return res.json({
    message: "Invalid request!",
    success: false,
    data: null
  })
  next()

}

module.exports = {
  CheckUserSession
}