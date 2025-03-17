const { getTourList_DashboardPageQuery } = require("../../model/Tour")
const { DatabaseQuery } = require("../../database")

async function getTourList(req, res, next) {
  try {
    const result = await DatabaseQuery(getTourList_DashboardPageQuery)

    return res.json({ message: "Success", success: true, data: result })
  } catch (error) {
    console.log(error)
  }

  res.json({ message: "Fail", success: false, data: null })
}

module.exports = {
  getTourList
}
