const { DatabaseQuery } = require("#server/database/index")
const { getTourCustomerQuery } = require("#server/model/Tour")

async function GetCustomerTourList(req, res, next) {
  try {
    const data = await DatabaseQuery(getTourCustomerQuery)
    return res.json({ success: true, message: "Success", data })
  } catch (error) { console.log(error) }

  return res.json({ success: false, message: "Success", data: null })
}

module.exports = {
  GetCustomerTourList
}