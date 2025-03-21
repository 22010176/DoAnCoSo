const Randomstring = require("randomstring")

const { addFavoriteTourQuery, deleteFavouriteTourQuery } = require("#server/model/Tour")
const { getUserFromSession } = require("../authorizeUser")
const { DatabaseQuery } = require("#server/database/index")

// // res.locals = { user }
async function DeleteTourFavourite(req, res, next) {
  console.log(req.body)
  const { user } = res.locals
  const { id: tourId } = req.body

  try {
    await DatabaseQuery(deleteFavouriteTourQuery, [user.id, tourId])

    return res.json({ message: "Success", success: true })
  } catch (error) { console.log(error) }

  next()
}

async function CreateDeleteFavouriteErrorResponse(req, res) {
  res.json({
    message: "Failed to delete favourite tour.",
    success: false,
    data: null
  })
}

module.exports = {
  DeleteTourFavourite,
  CreateDeleteFavouriteErrorResponse
}