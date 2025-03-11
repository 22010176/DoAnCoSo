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

module.exports = {
  createAccountQuery,
  getUserByEmailQuery
}