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

module.exports = {
  insertImageQuery,
  insertTourQuery,
  insertTourScheduleQuery
}
