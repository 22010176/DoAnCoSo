// /api/account/
const { CheckEmailExists, CheckEmailFormat, HashPassword, CreateRegisterResponse, CreateUser, CheckPhoneNumber } = require('./middleware/registerUser')
const { CheckPassword, CreateResponse, GenereteAccessToken, GetUserInfoByEmail } = require('./middleware/loginUser')

const router = require('express').Router()

// POST /api/account/register
router.post('/register',
  CheckEmailFormat,
  CheckEmailExists,
  CheckPhoneNumber,
  HashPassword,
  CreateUser,
  CreateRegisterResponse
)

// POST /api/account/login
router.post('/login',
  GetUserInfoByEmail,
  CheckPassword,
  GenereteAccessToken,
  CreateResponse
)


// router.use(function (req, res) {
//   res.json({ aa: 'ddd' })
// })

module.exports = router