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
    moTa TEXT,
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
  noiDung TEXT,
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
  oauth_id VARCHAR(256) PRIMARY KEY,
  provider VARCHAR(256),
  refreshToken VARCHAR(4096),
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

-- ___________________________________________________________________________________________________________________________
-- Thong tin tai khoan________________________________________________________________________________________________________
-- ___________________________________________________________________________________________________________________________
DROP TABLE IF EXISTS trangThaiDon;
CREATE TABLE trangThaiDon
(
  id VARCHAR(256) PRIMARY KEY,
  maTrangThai VARCHAR(256) UNIQUE,
  tenTrangThai VARCHAR(256) UNIQUE
);
INSERT INTO trangThaiDon
  (id, maTrangThai, tenTrangThai)
VALUES
  ('1', 'chua_xac_nhan', 'Chưa xác nhận'),
  ('2', 'da_xac_nhan', 'Đã xác nhận'),
  ('3', 'da_huy', 'Đã hủy'),
  ('4', 'dang_giao_hang', 'Đang giao hàng'),
  ('5', 'da_giao_hang', 'Đã giao hàng');


DROP TABLE IF EXISTS phieuDatTour;
CREATE TABLE phieuDatTour (
    id VARCHAR(256) PRIMARY KEY,
    ngayDat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ngayDi TIMESTAMP,
    soNguoiLon SMALLINT UNSIGNED DEFAULT 0,
    soTreEm SMALLINT UNSIGNED DEFAULT 0,
    soEmBe SMALLINT UNSIGNED DEFAULT 0,
    tour VARCHAR(256),
    taiKhoan VARCHAR(256),
    FOREIGN KEY (tour)
        REFERENCES tour (id),
    FOREIGN KEY (taiKhoan)
        REFERENCES users (id)
);

DROP TABLE IF EXISTS HoaDonThanhToan;
CREATE TABLE hoaDonThanhToan (
  id VARCHAR(256) PRIMARY KEY,
  ngayDat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  mail VARCHAR(256),
  name VARCHAR(256),
  phone VARCHAR(256),
  address VARCHAR(256),
  description TEXT,

  minhChungThanhToan VARCHAR(256),
  users VARCHAR(256),

  FOREIGN KEY (user) REFERENCES taiKhoan(id)
);

DROP TABLE IF EXISTS tour_hoaDon;
CREATE TABLE tour_hoaDon (
  id VARCHAR(256) PRIMARY KEY,

  ngayDi TIMESTAMP,
  soNguoiLon SMALLINT UNSIGNED DEFAULT 0,
  soTreEm SMALLINT UNSIGNED DEFAULT 0,
  soEmBe SMALLINT UNSIGNED DEFAULT 0,

  tour VARCHAR(256),
  hoaDonThanhToan VARCHAR(256),

  FOREIGN KEY (tour) REFERENCES tour(id),
  FOREIGN KEY (hoaDonThanhToan) REFERENCES hoaDonThanhToan(id)
);