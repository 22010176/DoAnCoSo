// /api/account/
const { CheckEmailExists, CheckEmailFormat, HashPassword, CreateRegisterErrorResponse, CreateUserInfo, CheckPhoneNumber, CreateAccountUser } = require('../middleware/_authenicate/registerUser')
const { CheckPassword, CreateResponse, GenereteAccessToken, GetUserInfoByEmail } = require('../middleware/_authenicate/loginUser')

const router = require('express').Router()

// POST /api/account/register
router.post('/register',
  CheckEmailFormat,
  CheckEmailExists,
  CheckPhoneNumber,
  HashPassword,
  CreateUserInfo,
  CreateAccountUser,
  CreateRegisterErrorResponse
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