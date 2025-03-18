const createOAuthUserQuery = `
INSERT INTO OAuthUser
  (id, provider, refreshToken, taiKhoan)
VALUES
  ?`

const getOAuthUserByIdQuery = `
SELECT * FROM OAuthUser
WHERE id IN ?`


const updateRefreshTokenByIdQuery = `
UPDATE OAuthUser 
SET refreshToken = ? 
WHERE id = ?`

module.exports = {
  createOAuthUserQuery,
  getOAuthUserByIdQuery,
  updateRefreshTokenByIdQuery
}