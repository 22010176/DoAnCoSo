const insertImageQuery = `
INSERT INTO hinhAnhTour 
  (id, hinhAnh, tour)
VALUES 
  ?;`

const insertTourQuery = `
INSERT INTO tour 
  (id, tenTour, giaNguoiLon, giaTreEm, giaEmBe, xuatPhat, diemDen, phuongTien, moTa)
VALUES
  ?`

const insertTourScheduleQuery = `
INSERT INTO lichTrinhTour
  (id, thuTuNgay, deMuc, noiDung, tour)
VALUES
  ?`

const getTourList_DashboardPage = `
SELECT 	t.id maTour,
		    t.tenTour tenTour,
        t.giaNguoiLon giaTien,
        t.xuatPhat noiKhoiHanh,
        3 danhGia,
        t.ngayTao,
		    COUNT(lt.id) thoiGian
FROM tour t
INNER JOIN lichtrinhtour lt ON lt.tour = t.id
GROUP BY t.id;`

module.exports = {
  insertImageQuery,
  insertTourQuery,
  insertTourScheduleQuery,
  getTourList_DashboardPage
}
