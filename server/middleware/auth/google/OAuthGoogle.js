const { DatabaseQuery } = require("../../../database")
const { createAccountQuery, getUserByEmailQuery } = require("../../../model/Account")

async function SaveAccountInfo(req, res, next) {

  next()
}

async function SaveOAuthInfo(req, res, next) {


  next()
}

module.exports = {
  SaveAccountInfo,
  SaveOAuthInfo
}