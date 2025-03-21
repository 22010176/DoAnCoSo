const insertCustomerOrder = `
INSERT INTO phieudattour
  (id, ngayDi, soNguoiLon, soTreEm, soEmBe, tour, taiKhoan)
VALUES 
  ?;`

module.exports = {
  insertCustomerOrder
}