function Reason({ image, title, content }) {
  return (
    <div className="lg:flex-row md:flex-col flex-row flex gap-3 items-center justify-center">
      <img className="h-20 w-auto" src={image} alt="" />
      <div className="lg:text-left md:text-center text-left">
        <p className="font-bold text-xl leading-8">{title}</p>
        <p className="text-gray-600 leading-5">{content}</p>
      </div>
    </div>
  )
}

function WhyChosing() {
  return (
    <div className="bg-blue-200/20 py-20 flex flex-col gap-10 border-y-2 border-blue-500">
      <h1 className="text-4xl font-bold text-center">Vì sao bạn nên chọn ChillTravel?</h1>

      <div className="xl:px-50 px-5 xl:gap-10 gap-5 md:flex-row flex-col md:items-center items-start flex justify-center  ">
        <Reason image="\assets\imgs\icon_whychoose_1.webp" title="Giá tốt nhất cho bạn" content="Có nhiều mức giá đa dạng phù hợp với ngân sách và nhu cầu của bạn" />
        <Reason image="\assets\imgs\icon_whychoose_2.webp" title="Booking dễ dàng" content="Các bước booking và chăm sóc khách hàng nhanh chóng và thuận tiện" />
        <Reason image="\assets\imgs\icon_whychoose_3.webp" title="Tour du lịch tối ưu" content="Đa dạng các loại hình tour du lịch với nhiều mức giá khác nhau" />
      </div>
    </div>
  )
}

export default WhyChosing