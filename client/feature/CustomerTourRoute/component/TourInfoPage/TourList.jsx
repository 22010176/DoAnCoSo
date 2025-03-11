import TourInfoVertical from "@/component/TourInfo/TourVertical";

function TourList() {
  return (
    <>
      <div className="border-b pb-1 relative">
        <p className="text-2xl">Tour cùng loại</p>
      </div>
      <div className="flex gap-5 overflow-x-auto">
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
        <TourInfoVertical image="\assets\imgs\sp2.webp" start="Vinh" name="Phượng Hoàng Cổ Trấn - Trương Gia Giới - Vũ Lăng Nguyên 6N5Đ" time="6N5Đ" />
      </div>
    </>
  )
}

export default TourList