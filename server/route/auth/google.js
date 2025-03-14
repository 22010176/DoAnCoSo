const { CreateAccessToken, SaveGoogleAccountInfo, SaveOAuthInfo } = require('../../middleware/auth/googleLogin');

// /api/auth/google
const passport = require('passport')
const router = require('express').Router()

// GET /api/auth/google/login
router.get('/login',
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent"
  }),
  function (req, res) {
    res.json({ test: true })
  }
)

// GET /api/auth/google/callback
router.get("/callback",
  passport.authenticate("google", { failureRedirect: `http://localhost:3000/` }),
  function (req, res) {
    res.redirect('/')
  }
);

// GET /api/auth/google/profile
router.get("/profile",
  function (req, res) {
    if (!req.isAuthenticated()) return res.redirect("/auth/google");

    res.json(req.user);
  }
)

router.get("/refresh-token", async (req, res) => {
  if (!req.user || !req.user.refreshToken) {
    return res.status(401).json({ error: "User not authenticated" });
  }

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