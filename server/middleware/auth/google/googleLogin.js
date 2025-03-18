const { getOAuthUserByIdQuery, createOAuthUserQuery, updateRefreshTokenByIdQuery } = require("../../../model/OAuthUser")

const { DatabaseQuery } = require("../../../database")
const { createAccountQuery, getUserByEmailQuery } = require("../../../model/Account")

async function CheckAccount(req, res, next) {
  const { user } = req
  if (!user) return res.json({
    success: false,
    message: "Fail",
    data: null
  })

  next()
}

async function SaveGoogleAccountInfo(req, res, next) {
  const { profile: { _json: user } } = req.user

  const { sub, name, given_name, family_name, picture, email } = user

  try {
    const check = await DatabaseQuery(getUserByEmailQuery, [[[email]]])
    // console.log(check)
    if (check.length > 0) return next()

    await DatabaseQuery(createAccountQuery, [[
      [sub, family_name, given_name, email, picture, null]
    ]])
  } catch (error) {
    console.log(error)
    return res.json({ success: false })
  }

  next()
}

async function SaveOAuthInfo(req, res, next) {
  const { profile: { _json: user, provider }, refreshToken } = req.user

  const { sub, name, given_name, family_name, picture, email } = user
  try {
    const result = await DatabaseQuery(getOAuthUserByIdQuery, [[[sub]]])

    if (result.length == 0)
      await DatabaseQuery(createOAuthUserQuery, [[
        [sub, provider, refreshToken, sub]
      ]])

    await DatabaseQuery(updateRefreshTokenByIdQuery, [refreshToken, sub])
  } catch (error) {
    console.log(error)
    return res.json({ success: false })
  }

  next()
}

/*
{
[0]   accessToken: 'ya29.a0AeXRPp5kbOSx2sUCS-m0Z53L2oA_wY7pkjEkUj04V2mzTobWCTMMGTQ5Jd53mxgmsi5oxe-FSi5bO3FPGyZzrrHRgXvHRT5WTgRsLgx6IN3QZ_nPY6bjm10oJd9ycZhQJb1vgEQdaECkst8pBylEA53p7FESNSq-eQ8E36LQaCgYKAUgSARESFQHGX2MixGJ3lVz1TBrD6MihtpuWMw0175',
[0]   refreshToken: '1//0eM-qXmjnVoN0CgYIARAAGA4SNwF-L9IrI7GcPiWhnOrly470m6i_jgtSxLDNS7uHJuqg-0ripNCjZsdUwo1l9vlIhYPQCEJMUJw',
[0]   profile: {
[0]     id: '105386221658573875542',
[0]     displayName: 'asfdasfasdf asdfasfd',
[0]     name: { familyName: 'asdfasfd', givenName: 'asfdasfasdf' },
[0]     emails: [ [Object] ],
[0]     photos: [ [Object] ],
[0]     provider: 'google',
[0]     _raw: '{\n' +
[0]       '  "sub": "105386221658573875542",\n' +
[0]       '  "name": "asfdasfasdf asdfasfd",\n' +
[0]       '  "given_name": "asfdasfasdf",\n' +
[0]       '  "family_name": "asdfasfd",\n' +
[0]       '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocK9ViaH2evYUB4zcofAV0DjRFT1kF-lvdCAzI29rg_ak9wohg\\u003ds96-c",\n' +
[0]       '  "email": "cdcdeec90@gmail.com",\n' +
[0]       '  "email_verified": true\n' +
[0]       '}',
[0]     _json: {
[0]       sub: '105386221658573875542',
[0]       name: 'asfdasfasdf asdfasfd',
[0]       given_name: 'asfdasfasdf',
[0]       family_name: 'asdfasfd',
[0]       picture: 'https://lh3.googleusercontent.com/a/ACg8ocK9ViaH2evYUB4zcofAV0DjRFT1kF-lvdCAzI29rg_ak9wohg=s96-c',
[0]       email: 'cdcdeec90@gmail.com',
[0]       email_verified: true
[0]     }
[0]   }
[0] }
*/

async function CreateAccessToken(req, res, next) {
  req.session.accessToken = req.user.accessToken
  next()
}

module.exports = {
  CheckAccount,
  SaveOAuthInfo,
  SaveGoogleAccountInfo,
  CreateAccessToken
}