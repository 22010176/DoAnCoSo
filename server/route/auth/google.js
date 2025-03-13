// /google
const passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const router = require('express').Router()

const googleToken = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `http://localhost:${process.env.PORT}/google/callback`,
  scope: ["profile", "email"],
  state: true,
}

passport.use(new GoogleStrategy(
  googleToken,
  (accessToken, refreshToken, profile, done) => {
    console.log({ accessToken, refreshToken, profile })
    return done(null, { accessToken, refreshToken, profile });
  })
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


// GET /google/auth
router.get('/auth', passport.authenticate("google"))

// GET /google/callback
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/auth/login" }),
  async (req, res, next) => {
    const user = req.user
    console.log('asdfadsfasfdsaf', user.profile._json)
    next()
  },
  (req, res) => res.redirect("http://localhost:3000")
);


module.exports = router