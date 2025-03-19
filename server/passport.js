const { v4 } = require('uuid');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy

const { DatabaseQuery } = require('./database');
const { createAccountQuery, getUserOAuthInfoByIdQuery } = require('./model/Account');
const { getOAuthUserByIdQuery, createOAuthUserQuery, updateRefreshTokenByIdQuery } = require('./model/OAuthUser');

const localConfiguration = {
  usernameField: "email",
  passwordField: "password",
};
passport.use(new LocalStrategy(
  localConfiguration,
  (email, password, done) => done(null, { email, password })
))


// setup passport
const googleConfiguration = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `http://localhost:3000/api/auth/google/callback`,
  state: true,
  passReqToCallback: true,
}
passport.use(new GoogleStrategy(
  googleConfiguration,
  async (req, accessToken, refreshToken, profile, done) => {
    const { _json, provider } = profile
    const { sub, name, given_name, family_name, picture, email } = _json

    // return done(null, null)
    let id
    try {
      // Check user
      const check = await DatabaseQuery(getOAuthUserByIdQuery, [[[sub]]])
      // console.log(check)
      if (check.length > 0) {
        await DatabaseQuery(updateRefreshTokenByIdQuery, [refreshToken, sub])
        id = check[0].id
      } else {
        id = v4()
        await DatabaseQuery(createAccountQuery, [[
          [id, family_name, given_name, email, picture, null]
        ]])

        await DatabaseQuery(createOAuthUserQuery, [[
          [sub, provider, refreshToken, id]
        ]])
      }

      return done(null, {
        accessToken,
        profile: { id, sub, name, given_name, family_name, picture, email, provider }
      })
    } catch (error) { console.log(error) }
    done(null, null)
  })
);


passport.serializeUser((user, done) => {
  done(null, { id: user?.profile.id, token: user?.accessToken })// 
});

passport.deserializeUser(async (user, done) => {
  try {
    const result = await DatabaseQuery(getUserOAuthInfoByIdQuery, [[[user.id]]])
    // console.log('dddd', result)

    done(null, result[0])
  } catch (error) {
  }
  done(null, null)
});
