// /api/account/
const { CheckUserSession } = require('../middleware/account')
const { CheckEmailExists, CheckEmailFormat, HashPassword, CreateRegisterErrorResponse, CreateUserInfo, CheckPhoneNumber, CreateAccountUser } = require('../middleware/account/registerUser')
const { CheckPassword, CreateResponse, GenereteAccessToken, GetUserInfoByEmail } = require('../middleware/account/loginUser')
const { GetUserInfo } = require('../middleware/account/getUserInfo')
const { DeleteUserSession, ErrorLogoutReponse } = require('../middleware/account/LogoutUser')

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

// GET /api/account/info
router.get('/info',
  CheckUserSession,
  GetUserInfo
)

// POST /api/account/logout
router.post('/logout',
  CheckUserSession,
  DeleteUserSession,
  ErrorLogoutReponse
)


// router.use(function (req, res) {
//   res.json({ aa: 'ddd' })
// })

module.exports = router