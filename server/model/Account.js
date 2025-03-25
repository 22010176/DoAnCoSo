const createAccountQuery = `
INSERT INTO 
  users (id, ho, ten, email, hinhAnh, soDienThoai)
VALUES ?;`

const getUserByEmailQuery = `
SELECT 	u.*,
		    v.maVaiTro, 
        v.tenVaiTro
FROM users u
INNER JOIN vaitro v	ON u.vaiTro = v.id
WHERE email IN ?`

const getUserOAuthInfoQuery = `
SELECT  u.id,
        u.ho,
        u.ten,
        u.email,
        u.hinhAnh, 
        u.soDienThoai,
        v.maVaiTro, 
        v.tenVaiTro,
        o.provider,
        o.accessToken
FROM users u
INNER JOIN vaitro v	ON u.vaiTro = v.id
INNER JOIN OAuthUser o ON o.taiKhoan 
WHERE email IN ?`

const getUserOAuthInfoByIdQuery = `
SELECT  u.*,
        v.maVaiTro, 
        v.tenVaiTro,
        o.oauth_id,
        o.provider
FROM users u
INNER JOIN vaitro v	ON u.vaiTro = v.id
INNER JOIN OAuthUser o ON o.taiKhoan = u.id
WHERE u.id IN ?`

const getAccountByIdQuery = `
SELECT * FROM users 
WHERE u.id = ?`

module.exports = {
  createAccountQuery,
  getUserByEmailQuery,
  getUserOAuthInfoQuery,
  getUserOAuthInfoByIdQuery,
  getAccountByIdQuery
}