async function DeleteUserSession(req, res, next) {
  req.session.destroy((err) => {
    if (err) return next()

    res.clearCookie("connect.sid"); // Xóa cookie session
    res.json({
      message: "Logout successful",
      success: true,
      data: null
    });
  });
}

async function ErrorLogoutReponse(req, res, next) {
  res.json({
    message: "Server error",
    success: false,
    data: null
  });
}

module.exports = {
  DeleteUserSession,
  ErrorLogoutReponse
}