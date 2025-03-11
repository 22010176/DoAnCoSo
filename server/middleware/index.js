function returnResult(req, res) {
  res.json(res.locals.result)
}

module.exports = {
  returnResult
}