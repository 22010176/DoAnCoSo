const createOAuthUserQuery = `
INSERT INTO OAuthUser
  (oauth_id, provider, refreshToken, taiKhoan)
VALUES
  ?`

const getOAuthUserByIdQuery = `
SELECT  u.*,
        o.oauth_id,
        o.provider,
        o.refreshToken
FROM OAuthUser o
INNER JOIN users u ON u.id = o.taiKhoan
WHERE o.oauth_id IN ?`


const updateRefreshTokenByIdQuery = `
UPDATE OAuthUser 
SET refreshToken = ? 
WHERE oauth_id = ?`

module.exports = {
  createOAuthUserQuery,
  getOAuthUserByIdQuery,
  updateRefreshTokenByIdQuery
}