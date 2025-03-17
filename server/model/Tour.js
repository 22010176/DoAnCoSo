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

const getTourList_DashboardPageQuery = `
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


const getTourInfoQuery = `
SELECT  t.id,
        t.tenTour,
        t.giaNguoiLon,
        t.giaTreEm,
        t.giaEmBe,
        t.xuatPhat,
        t.diemDen,
        t.moTa,
        t.ngayTao,
        p.tenPhuongTien,
        th.tenTrangThai
FROM tour t
INNER JOIN phuongTien p ON p.id = t.phuongTien
INNER JOIN trangThaiTour th ON th.id = T.trangThai
WHERE t.id = ?`

const getTourImageQuery = `
SELECT h.*
FROM hinhanhtour h
INNER JOIN tour t ON t.id = h.tour
WHERE t.id = ?;`

const getTourScheduleQuery = `
SELECT h.*
FROM lichtrinhtour h
INNER JOIN tour t ON t.id = h.tour
WHERE t.id = ?
ORDER BY thuTuNgay;`


module.exports = {
  insertImageQuery,
  insertTourQuery,
  insertTourScheduleQuery,
  getTourList_DashboardPageQuery,
  getTourInfoQuery,
  getTourImageQuery,
  getTourScheduleQuery
}
