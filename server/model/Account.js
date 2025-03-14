const createAccountQuery = `
INSERT INTO 
  users (id, ho, ten, email, hinhAnh, soDienThoai, vaiTro)
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
        v.tenVaiTro
        o.provider,
        o.accessToken
FROM users u
INNER JOIN vaitro v	ON u.vaiTro = v.id
INNER JOIN OAuthUser o ON o.taiKhoan 
WHERE email IN ?`

module.exports = {
  createAccountQuery,
  getUserByEmailQuery,
  getUserOAuthInfoQuery
}