const getOrderListQuery = `
SELECT 
	hdtt.id,
  hdtt.ngayDat,
  hdtt.phone,
  CONCAT(u.ho, " ", u.ten) tenKhachHang,
  SUM(thd.soEmBe * t.giaEmBe + thd.soNguoiLon * t.giaNguoiLon + thd.soTreEm * t.giaTreEm) thanhTien
FROM hoadonthanhtoan hdtt
INNER JOIN users u ON u.id = hdtt.taiKhoan
INNER JOIN tour_hoadon thd ON thd.hoaDonThanhToan = hdtt.id
INNER JOIN tour t ON t.id = thd.tour
GROUP BY hdtt.id;`

const getOrderDetailQuery = `
SELECT * 
FROM hoadonthanhtoan
WHERE id = ?;`

const getOrderListItemQuery = `
SELECT 
	  t.id,
    t.tenTour,
    soEmBe + soTreEm + soNguoiLon soLuong,
    soEmBe * giaEmBe + soTreEm * giaTreEm + soNguoiLon * giaEmBe thanhTien
FROM hoadonthanhtoan hdtt
INNER JOIN tour_hoadon t_hd ON t_hd.hoaDonThanhToan = hdtt.id
INNER JOIN tour t ON t.id = t_hd.tour
WHERE hdtt.id = ?;`

module.exports = {
  getOrderListQuery,
  getOrderDetailQuery,
  getOrderListItemQuery
}