DROP DATABASE IF EXISTS quanLyBooking;
CREATE DATABASE quanLyBooking;
USE quanLyBooking;

-- ___________________________________________________________________________________________________________________________
-- Tour du lich_______________________________________________________________________________________________________________
-- ___________________________________________________________________________________________________________________________
DROP TABLE IF EXISTS diaDiem;
CREATE TABLE diaDiem (
  id                VARCHAR(255)        PRIMARY KEY,
  tenDiaDiem        VARCHAR(255),
  quocGia           VARCHAR(255),

  UNIQUE(tenDiaDiem, quocGia)
);

DROP TABLE IF EXISTS phuongTien;
CREATE TABLE phuongTien (
  id                VARCHAR(255)        PRIMARY KEY,
  maPhuongTien      VARCHAR(255)        UNIQUE,
  tenPhuongTien     VARCHAR(255)        UNIQUE
);
INSERT INTO phuongTien (id, maPhuongTien, tenPhuongTien) 
VALUES 	('1', 'xe_bus', 'xe bus'),
		    ('2', 'may_bay','máy bay'),
        ('3', 'tau_thuy', 'tàu thủy'),
        ('4', 'tau_hoa', 'tàu hỏa');

DROP TABLE IF EXISTS trangThaiTour;
CREATE TABLE trangThaiTour (
  id                VARCHAR(255)        PRIMARY KEY,
  maTrangThai       VARCHAR(255)        UNIQUE,
  tenTrangThai      VARCHAR(255)        UNIQUE
);
INSERT INTO trangThaiTour (id, maTrangThai, tenTrangThai) 
VALUES 	('1', 'dung', 'dừng hoạt động'),
		    ('2', 'hoat_dong', 'hoạt động');

DROP TABLE IF EXISTS tour;
CREATE TABLE tour (
  id                VARCHAR(255)        PRIMARY KEY,
  tenTour           VARCHAR(255),
  soNgay            SMALLINT            DEFAULT 1,
  xuatPhat          VARCHAR(255),
  diemDen           VARCHAR(255),
  phuongTien        VARCHAR(255),
  trangThai         VARCHAR(255),

  FOREIGN KEY(xuatPhat) REFERENCES diaDiem(id),
  FOREIGN KEY(diemDen) REFERENCES diaDiem(id),
  FOREIGN KEY(phuongTien) REFERENCES phuongTien(id),
  FOREIGN KEY(trangThai) REFERENCES trangThaiTour(id)
);

DROP TABLE IF EXISTS bangGia;
CREATE TABLE bangGia (
  id                VARCHAR(255)        PRIMARY KEY,
  doiTuong          VARCHAR(255),
  giaCa             INT,
  capNhatLanCuoi    DATETIME            DEFAULT CURRENT_TIMESTAMP,
  tour              VARCHAR(255),

  FOREIGN KEY(tour) REFERENCES tour(id)
);

DROP TABLE IF EXISTS moTaTour;
CREATE TABLE moTaTour (
  id                VARCHAR(255)        PRIMARY KEY,
  noiDung           VARCHAR(255),
  tour              VARCHAR(255),

  FOREIGN KEY(tour) REFERENCES tour(id)
);

DROP TABLE IF EXISTS hinhAnhTour;
CREATE TABLE hinhAnhTour (
  id                VARCHAR(255)        PRIMARY KEY,
  hinhAnh           VARCHAR(255),
  moTaTour          VARCHAR(255),

  FOREIGN KEY(moTaTour) REFERENCES moTaTour(id)
);

DROP TABLE IF EXISTS lichTrinhTour;
CREATE TABLE lichTrinhTour (
  id                VARCHAR(255)        PRIMARY KEY,
  thuTuNgay         SMALLINT            DEFAULT 1,
  noiDung           VARCHAR(255),
  moTaTour          VARCHAR(255),

  FOREIGN KEY(moTaTour) REFERENCES moTaTour(id)
);


-- ___________________________________________________________________________________________________________________________
-- Thong tin tai khoan________________________________________________________________________________________________________
-- ___________________________________________________________________________________________________________________________
DROP TABLE IF EXISTS vaiTro;
CREATE TABLE vaiTro (
  id                VARCHAR(255)        PRIMARY KEY,
  maVaiTro          VARCHAR(255)        UNIQUE,
  tenVaiTro         VARCHAR(255)        UNIQUE
);
INSERT INTO vaiTro (id, maVaiTro, tenVaiTro) 
VALUES 	('1', 'admin', 'Quản trị viên'),
		    ('2', 'guess', 'Khách hàng');


DROP TABLE IF EXISTS taiKhoan;
CREATE TABLE taiKhoan (
  id                VARCHAR(255)        PRIMARY KEY,
  hoTen             VARCHAR(255),
  email             VARCHAR(255)        NOT NULL UNIQUE,
  matKhau           VARCHAR(255),
  hinhAnh           VARCHAR(255),
  soDienThoai       VARCHAR(255),
  vaiTro            VARCHAR(255),

  FOREIGN KEY(vaiTro) REFERENCES vaiTro(id)
);

DROP TABLE IF EXISTS diaChi;
CREATE TABLE tourYeuThich (
  id                VARCHAR(255)        PRIMARY KEY,
  quan              VARCHAR(255),
  thanhPho          VARCHAR(255),
  taiKhoan          VARCHAR(255),

  UNIQUE(taiKhoan, quan, thanhPho),
  FOREIGN KEY(taiKhoan) REFERENCES taiKhoan(id)
);

DROP TABLE IF EXISTS tourYeuThich;
CREATE TABLE tourYeuThich (
  id                VARCHAR(255)        PRIMARY KEY,
  taiKhoan          VARCHAR(255),
  tour              VARCHAR(255),

  UNIQUE(taiKhoan, tour),
  FOREIGN KEY(taiKhoan) REFERENCES taiKhoan(id),
  FOREIGN KEY(tour) REFERENCES tour(id)
);