const { DatabaseQuery } = require("#server/database/index")
const { getFavouriteTourQuery } = require("#server/model/Tour")

// res.locals = { user }
async function getFavouriteTour(req, res, next) {
  const { user } = res.locals
  try {
    const result = await DatabaseQuery(getFavouriteTourQuery, [user.id])

    return res.json({ message: "Success", success: true, data: result })
  } catch (error) { console.log(error) }

  next()

}

async function CreateGetFavTourErrorResponse(req, res, next) {
  res.json({ message: "Fail", success: false, data: [] })
}

module.exports = {
  getFavouriteTour,
  CreateGetFavTourErrorResponse
}