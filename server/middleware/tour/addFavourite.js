const Randomstring = require("randomstring")

const { addFavoriteTourQuery } = require("#server/model/Tour")
const { getUserFromSession } = require("../authorizeUser")
const { DatabaseQuery } = require("#server/database/index")

// res.locals = {}
async function CheckUser(req, res, next) {
  const user = await getUserFromSession(req)

  if (user == null)
    return res.json({ message: "Invalid request!", success: false, data: null })

  res.locals.user = user
  next()
}

// // res.locals = { user }
async function InsertTourFavourite(req, res, next) {
  const { user } = res.locals
  const { id: tourId } = req.body

  const id = "favTour-" + Randomstring.generate(10)
  try {
    await DatabaseQuery(addFavoriteTourQuery, [[
      [id, user.id, tourId]
    ]])

    return res.json({ message: "Success", success: true, data: { id } })
  } catch (error) { console.log(error) }

  next()
}

async function CreateAddFavouriteErrorResponse(req, res) {
  res.json({
    message: "Failed to add favourite tour.",
    success: false,
    data: null
  })
}

module.exports = {
  CheckUser,
  InsertTourFavourite,
  CreateAddFavouriteErrorResponse
}