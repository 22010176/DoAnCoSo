const createAccountQuery = `
INSERT INTO taiKhoan (id, hoTen, email, matKhau, hinhAnh, soDienThoai, vaiTro)
VALUES ?;`

module.exports = {
  createAccountQuery
}