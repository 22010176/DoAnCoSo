// /api/auth/local/
const passport = require('passport')
const router = require('express').Router()

const { CheckUserSession, CheckOAuthUser } = require('../../middleware/authorizeUser')
const { CheckEmailExists, CheckEmailFormat, HashPassword, CreateRegisterErrorResponse, CreateUserInfo, CheckPhoneNumber, CreateAccountUser } = require('../../middleware/auth/registerUser')
const { GetUserInfo, GetOAuthUserInfo } = require('../../middleware/auth/getUserInfo')
const { DeleteUserSession, ErrorLogoutReponse } = require('../../middleware/auth/LogoutUser')
const { CheckPassword, CreateResponse, GenereteAccessToken, GetUserInfoByEmail } = require('../../middleware/auth/loginUser')

// POST /api/auth/local/register
router.post('/register',
  CheckEmailFormat,
  CheckEmailExists,
  CheckPhoneNumber,
  HashPassword,
  CreateUserInfo,
  CreateAccountUser,
  CreateRegisterErrorResponse
)

// POST /api/auth/local/login
router.post('/login',
  GetUserInfoByEmail,
  CheckPassword,
  GenereteAccessToken,
  CreateResponse
)

// GET /api/auth/local/info
router.get('/info',
  CheckOAuthUser,
  CheckUserSession,
  GetOAuthUserInfo,
  GetUserInfo
)

// POST /api/auth/local/logout
router.post('/logout',
  CheckUserSession,
  DeleteUserSession,
  ErrorLogoutReponse
)


router.use(function (req, res) {
  res.json({ aa: 'ddd' })
})

module.exports = router