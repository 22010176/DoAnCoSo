function WhyChosing() {
  return (
    <div className="bg-blue-200/20 py-20 flex flex-col gap-10 border-y-2 border-blue-500">
      <h1 className="text-4xl font-bold text-center">Vì sao bạn nên chọn ChillTravel</h1>

      <div className="xl:px-50 px-5 xl:gap-10 gap-5 md:flex-row flex-col md:items-center items-start flex justify-center  ">
        <div className="lg:flex-row md:flex-col flex-row flex gap-3 items-center justify-center">
          <img className="h-20 w-auto" src="\assets\imgs\icon_whychoose_1.webp" alt="" />
          <div className="lg:text-left md:text-center text-left">
            <p className="font-bold text-xl leading-8">Giá tốt nhất cho bạn</p>
            <p className="text-gray-600 leading-5">
              Có nhiều mức giá đa dạng phù hợp với ngân sách và nhu cầu của bạn
            </p>
          </div>
        </div>
        <div className="lg:flex-row md:flex-col flex gap-3 items-center justify-center">
          <img className="h-20 w-auto" src="\assets\imgs\icon_whychoose_2.webp" alt="" />
          <div className="lg:text-left md:text-center text-left">
            <p className="font-bold text-xl leading-8">Booking dễ dàng</p>
            <p className="text-gray-600 leading-5">
              Các bước booking và chăm sóc khách hàng nhanh chóng và thuận tiện
            </p>
          </div>
        </div>
        <div className=" lg:flex-row md:flex-col flex-row flex gap-3 items-center justify-center">
          <img className="h-20 w-auto" src="\assets\imgs\icon_whychoose_3.webp" alt="" />
          <div className="lg:text-left md:text-center text-left">
            <p className="font-bold text-xl leading-8">Tour du lịch tối ưu</p>
            <p className="text-gray-600 leading-5">
              Đa dạng các loại hình tour du lịch với nhiều mức giá khác nhau
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChosing