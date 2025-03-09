DROP TABLE IF EXISTS diaDiem CASCADE;
CREATE TABLE diaDiem (
	id							  VARCHAR(255)				PRIMARY KEY,
	tenDiaDiem			  VARCHAR(255)				NOT NULL,
	quocGia						VARCHAR(255)				NOT NULL
);

DROP TABLE IF EXISTS phuongTien CASCADE;
CREATE TABLE phuongTien (
	id							  VARCHAR(255)				PRIMARY KEY,
	tenPhuongTien		  VARCHAR(255)				NOT NULL
);

DROP TABLE IF EXISTS trangThaiTour CASCADE;
CREATE TABLE trangThaiTour (
	id							  VARCHAR(255)				PRIMARY KEY,
	tenTrangThai			VARCHAR(255)				NOT NULL
);

DROP TABLE IF EXISTS tour CASCADE;
CREATE TABLE tour (
	id							  VARCHAR(255)				PRIMARY KEY,
	tenTour						VARCHAR(255)				NOT NULL,
	soNgay						SMALLINT					  NOT NULL CHECK(soNgay > 0),
	
	xuatPhat					VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_xuatPhat FOREIGN KEY (xuatPhat) REFERENCES diaDiem(id),
	
	diemDen						VARCHAR(255)				NOT NULL CHECK(xuatPhat != diemDen),
	CONSTRAINT fk_diemDen FOREIGN KEY (diemDen) REFERENCES diaDiem(id),
	
	phuongTien			  VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_phuongTien FOREIGN KEY (phuongTien) REFERENCES phuongTien(id),
	
	trangThai				  VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_trangThai FOREIGN KEY (trangThai) REFERENCES trangThaiTour(id)
);

DROP TABLE IF EXISTS moTaTour CASCADE;
CREATE TABLE moTaTour (
	id                VARCHAR(255)				PRIMARY KEY,
	noiDung						VARCHAR(1023)				NOT NULL,

	tour						  VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_tour FOREIGN KEY (tour) REFERENCES tour(id)
);

DROP TABLE IF EXISTS lichTrinhTour CASCADE;
CREATE TABLE lichTrinhTour (
	id							  VARCHAR(255)				PRIMARY KEY,
	thuTuNgay					SMALLINT					  DEFAULT 1,
	noiDung						VARCHAR(1023)				NOT NULL,

	moTaTour					VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_moTaTour FOREIGN KEY (moTaTour) REFERENCES moTaTour(id),
	UNIQUE(thuTuNgay, moTaTour)
);

DROP TABLE IF EXISTS hinhAnhTour CASCADE;
CREATE TABLE hinhAnhTour (
	id							  VARCHAR(255)				PRIMARY KEY,
	hinhAnh						VARCHAR(255)				NOT NULL,

	moTaTour					VARCHAR(255)				NOT NULL,
	CONSTRAINT fk_moTaTour FOREIGN KEY (moTaTour) REFERENCES moTaTour(id)
);

DROP TABLE IF EXISTS bangGia CASCADE;
CREATE TABLE bangGia (
	id							  VARCHAR(255)				PRIMARY KEY,
	doiTuong					VARCHAR(255)				NOT NULL,
	giaCa						  INT							    NOT NULL CHECK(giaCa > 0),
	capNhatLanCuoi		TIMESTAMP					  NOT NULL DEFAULT CURRENT_TIMESTAMP
);

