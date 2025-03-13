
/*
{
  accessToken: 'ya29.a0AeXRPp5HcX34OKFHv7UsrQEzslpdxZnb-wHZPncyuOGgccm_4e2jA4KmihAhdgvEAv51-N29JJhzJQKmkPx148SYfyiy55M3XG2dMxmhuKLVdrFOp6_wDFOgEdSdyPDx0kLO2Y8eGOnHIqMZi3IUHf7VfctGvwgZwPYhx0XM_nc8E0TH0AaCgYKAZESARMSFQHGX2MighdR8cnMY_zZxeYPRORDwQ0185',
  refreshToken: undefined,
  profile: {
    id: '113615494487873910449',
    displayName: 'Đức Minh Đỗ',
    name: { familyName: 'Đỗ', givenName: 'Đức Minh' },
    emails: [ [Object] ],
    photos: [ [Object] ],
    provider: 'google',
    _raw: '{\n' +
      '  "sub": "113615494487873910449",\n' +
      '  "name": "Đức Minh Đỗ",\n' +
      '  "given_name": "Đức Minh",\n' +
      '  "family_name": "Đỗ",\n' +
      '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIpc4YWWFx8MfnfYWOl1ex8sMNmE-zM3pHFm8AEXlgQWvJi3SSB\\u003ds96-c",\n' +
      '  "email": "ducminhdo08@gmail.com",\n' +
      '  "email_verified": true\n' +
      '}',
    _json: {
      sub: '113615494487873910449',
      name: 'Đức Minh Đỗ',
      given_name: 'Đức Minh',
      family_name: 'Đỗ',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocIpc4YWWFx8MfnfYWOl1ex8sMNmE-zM3pHFm8AEXlgQWvJi3SSB=s96-c',
      email: 'ducminhdo08@gmail.com',
      email_verified: true
    }
  }
}
 */
async function SaveOAuthInfo(req, res, next) {
  const { user } = req

  res.locals.user = {
    ho: user.name.family_name,
    ten: user.name.givenName,
    email: user.profile.emails[0].value,
    picture: user.profile.photos[0].value
  }

  next()
}

module.exports = {
  GetUserData
}