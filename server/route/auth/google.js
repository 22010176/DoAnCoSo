const { isUnauthenticated, isAuthenticated } = require('../../middleware/authorizeUser');
const { CreateAccessToken, SaveGoogleAccountInfo, SaveOAuthInfo, CheckAccount } = require('../../middleware/auth/google/googleLogin');

// /api/auth/google
const passport = require('passport')
const router = require('express').Router()

// GET /api/auth/google/login
router.get('/login',
  // isUnauthenticated,
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent"
  }))

// GET /api/auth/google/callback
router.get("/callback",
  passport.authenticate("google", { failureRedirect: `http://localhost:3000/` }),
  CheckAccount,
  // SaveGoogleAccountInfo,
  // SaveOAuthInfo,
  function (req, res) { res.redirect('/') }
);

// GET /api/auth/google/profile
router.get("/profile",
  isAuthenticated,
  function (req, res) {
    res.json(req.user);
  }
)

router.get("/refresh-token",
  isAuthenticated,
  async function (req, res) {
    try {
      const response = await axios.post("https://oauth2.googleapis.com/token", new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: req.user.refreshToken,
        grant_type: "refresh_token"
      }).toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      // Cập nhật access token mới
      req.user.accessToken = response.data.access_token;
      res.json({ accessToken: response.data.access_token });
    } catch (error) {
      res.status(500).json({ error: "Failed to refresh token" });
    }
  });

module.exports = router