DROP DATABASE IF EXISTS quanLyBooking;
CREATE DATABASE quanLyBooking;

USE quanLyBooking;

-- ___________________________________________________________________________________________________________________________
-- Tour du lich_______________________________________________________________________________________________________________
-- ___________________________________________________________________________________________________________________________
DROP TABLE IF EXISTS phuongTien;
CREATE TABLE phuongTien
(
  id VARCHAR(256) PRIMARY KEY,
  maPhuongTien VARCHAR(256) UNIQUE,
  tenPhuongTien VARCHAR(256) UNIQUE
);
INSERT INTO phuongTien
  (id, maPhuongTien, tenPhuongTien)
VALUES
  ('1', 'xe_bus', 'xe bus'),
  ('2', 'may_bay', 'máy bay'),
  ('3', 'tau_thuy', 'tàu thủy'),
  ('4', 'tau_hoa', 'tàu hỏa');

DROP TABLE IF EXISTS trangThaiTour;
CREATE TABLE trangThaiTour
(
  id VARCHAR(256) PRIMARY KEY,
  maTrangThai VARCHAR(256) UNIQUE,
  tenTrangThai VARCHAR(256) UNIQUE
);
INSERT INTO trangThaiTour
  (id, maTrangThai, tenTrangThai)
VALUES
  ('1', 'dung', 'dừng hoạt động'),
  ('2', 'hoat_dong', 'hoạt động');

DROP TABLE IF EXISTS tour;
CREATE TABLE tour (
    id VARCHAR(256) PRIMARY KEY,
    tenTour VARCHAR(256),
    giaNguoiLon INT UNSIGNED,
    giaTreEm INT UNSIGNED,
    giaEmBe INT UNSIGNED,
    xuatPhat VARCHAR(256),
    diemDen VARCHAR(256),
    phuongTien VARCHAR(256),
    trangThai VARCHAR(256) DEFAULT '2',
    moTa VARCHAR(1024),
    ngayTao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (phuongTien)
        REFERENCES phuongTien (id),
    FOREIGN KEY (trangThai)
        REFERENCES trangThaiTour (id)
);

DROP TABLE IF EXISTS hinhAnhTour;
CREATE TABLE hinhAnhTour
(
  id VARCHAR(256) PRIMARY KEY,
  hinhAnh VARCHAR(256),
  tour VARCHAR(256),

  FOREIGN KEY(tour) REFERENCES tour(id)
);

DROP TABLE IF EXISTS lichTrinhTour;
CREATE TABLE lichTrinhTour
(
  id VARCHAR(256) PRIMARY KEY,
  thuTuNgay SMALLINT DEFAULT 1,
  deMuc VARCHAR(256),
  noiDung VARCHAR(1024),
  tour VARCHAR(256),
  
  UNIQUE(tour, thuTuNgay),

  FOREIGN KEY(tour) REFERENCES tour(id)
);

-- ___________________________________________________________________________________________________________________________
-- Thong tin tai khoan________________________________________________________________________________________________________
-- ___________________________________________________________________________________________________________________________
DROP TABLE IF EXISTS vaiTro;
CREATE TABLE vaiTro
(
  id VARCHAR(256) PRIMARY KEY,
  maVaiTro VARCHAR(256) UNIQUE,
  tenVaiTro VARCHAR(256) UNIQUE
);
INSERT INTO vaiTro
  (id, maVaiTro, tenVaiTro)
VALUES
  ('1', 'admin', 'Quản trị viên'),
  ('2', 'guess', 'Khách hàng');

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id VARCHAR(256) PRIMARY KEY,
  ho VARCHAR(32),
  ten VARCHAR(64),
  email VARCHAR(256) NOT NULL UNIQUE,
  hinhAnh VARCHAR(256),
  soDienThoai VARCHAR(256),
  vaiTro VARCHAR(256) DEFAULT "2",
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY(vaiTro) REFERENCES vaiTro(id)
);

DROP TABLE IF EXISTS OAuthUser;
CREATE TABLE OAuthUser
(
  id VARCHAR(256) PRIMARY KEY,
  provider VARCHAR(256),
  accessToken VARCHAR(1024),
  taiKhoan VARCHAR(256) UNIQUE,

  FOREIGN KEY(taiKhoan) REFERENCES users(id)
);

DROP TABLE IF EXISTS diaChi;
CREATE TABLE tourYeuThich
(
  id VARCHAR(256) PRIMARY KEY,
  quan VARCHAR(256),
  thanhPho VARCHAR(256),
  taiKhoan VARCHAR(256),

  UNIQUE(taiKhoan, quan, thanhPho),
  FOREIGN KEY(taiKhoan) REFERENCES users(id)
);

DROP TABLE IF EXISTS tourYeuThich;
CREATE TABLE tourYeuThich
(
  id VARCHAR(256) PRIMARY KEY,
  taiKhoan VARCHAR(256),
  tour VARCHAR(256),

  UNIQUE(taiKhoan, tour),
  FOREIGN KEY(taiKhoan) REFERENCES users(id),
  FOREIGN KEY(tour) REFERENCES tour(id)
);
