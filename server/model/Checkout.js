const insertCheckout = `
INSERT INTO hoadonthanhtoan
  (id, mail, name, phone, address, description, minhChungThanhToan, taiKhoan)
VALUES
  ?`

const insertCheckoutItem = `
INSERT INTO tour_hoaDon
  (id, ngayDi, soNguoiLon, soTreEm, soEmBe, tour, hoaDonThanhToan)
VALUES ?`

module.exports = {
  insertCheckout,
  insertCheckoutItem
}