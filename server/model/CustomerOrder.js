const insertCustomerOrder = `
INSERT INTO phieudattour
  (id, ngayDi, soNguoiLon, soTreEm, soEmBe, tour, taiKhoan)
VALUES 
  ?;`

const getCustomerOrderTour = `
SELECT * 
FROM phieudattour
WHERE 
	  taiKhoan = ? AND 
    tour = ?;`

const updateCustomerOrderTour = `
UPDATE phieudattour
SET
  ngayDat = ?,
  ngayDi = ?,
  soNguoiLon = ?,
  soTreEm = ?,
  soEmBe = ?
WHERE id = ?;`


const getCustomerOrdersList = `
SELECT 
	  t.id maTour,
    u.id maKhachHang,
    t.tenTour,
    t.giaNguoiLon,
    t.giaTreEm,
    t.giaEmBe,
    tdt.soNguoiLon,
    tdt.soTreEm,
    tdt.soEmBe,
    tdt.ngayDi,
    soNguoiLon * giaNguoiLon + soTreEm * giaTreEm + soEmBe * giaEmBe thanhTien,
    (
      SELECT hinhAnh
      FROM hinhanhtour hat
      WHERE hat.tour = t.id
      LIMIT 1
    ) hinhAnh
FROM phieudattour tdt
INNER JOIN tour t ON t.id = tdt.tour
INNER JOIN users u ON u.id = tdt.taiKhoan
WHERE u.id = ?;`

module.exports = {
  insertCustomerOrder,
  getCustomerOrdersList,
  getCustomerOrderTour,
  updateCustomerOrderTour
}