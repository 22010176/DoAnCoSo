const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy

// setup passport
const googleConfiguration = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `http://localhost:3000/api/auth/google/callback`,
  state: true,
}
passport.use(new GoogleStrategy(
  googleConfiguration,
  (accessToken, refreshToken, profile, done) => {
    done(null, { accessToken, refreshToken, profile })
  })
);

const localConfiguration = {
  usernameField: "email",
  passwordField: "password",
};
passport.use(new LocalStrategy(
  localConfiguration,
  (email, password, done) => done(null, { email, password })
))


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
