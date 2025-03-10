const createAccountQuery = `
INSERT INTO 
  users (id, ho, ten, email, hinhAnh, soDienThoai, vaiTro)
VALUES ?;`

const getUserByEmailQuery = `
SELECT *
FROM users
WHERE email IN ?`

module.exports = {
  createAccountQuery,
  getUserByEmailQuery
}