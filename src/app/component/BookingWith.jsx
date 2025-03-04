function BookingWith() {
  return (
    <div className="py-20 flex flex-col gap-15 items-center text-center">
      <div className="leading-8">
        <h1 className="font-bold text-4xl">Booking cùng ND Travel</h1>
        <p className="text-gray-600 text-lg">Chỉ với 3 bước đơn giản và dễ dàng có ngay trải nghiệm tuyệt vời !</p>
      </div>

      <div className="xl:gap-15 gap-5 md:flex-row flex-col md:justify-center md:items-center items-start flex relative px-10">
        <div className="md:block hidden absolute -z-1 w-screen h-auto translate-y-1/2" >
          <img className="w-screen h-auto " src="\assets\imgs\bg-step.webp" alt="" />
        </div>

        <div className="xl:w-80 md:w-50 md:flex md:flex-col md:text-center text-left grid grid-cols-[auto_1fr] gap-5 items-center">
          <div className="md:flex hidden rounded-full w-15 h-15 text-center items-center justify-center font-bold text-2xl bg-blue-100 text-blue-500">1</div>
          <img className="md:h-30 md:w-auto w-30 h-auto" src="\assets\imgs\icon_step_1.webp" alt="" />
          <div>
            <p className="font-black text-xl">Tìm nơi muốn đến</p>
            <p className="text-gray-600">
              Bất cứ nơi đâu bạn muốn đến, chúng tôi có tất cả những gì bạn cần
            </p>
          </div>
        </div>

        <div className="xl:w-80 md:w-50 md:flex md:flex-col md:text-center text-left grid grid-cols-[auto_1fr] gap-5 items-center">
          <div className="md:flex hidden rounded-full w-15 h-15 text-center items-center justify-center font-bold text-2xl bg-blue-100 text-blue-500">2</div>
          <img className="md:h-30 md:w-auto w-30 h-auto" src="\assets\imgs\icon_step_2.webp" alt="" />
          <div>
            <p className="font-black text-xl">Đặt vé</p>
            <p className="text-gray-600">
              ND Travel sẽ hỗ trợ bạn đặt vé trực tiếp nhanh chóng và thuận tiện
            </p>
          </div>
        </div>

        <div className="xl:w-80 md:w-50 md:flex md:flex-col md:text-center text-left grid grid-cols-[auto_1fr] gap-5 items-center">
          <div className="md:flex hidden rounded-full w-15 h-15 text-center items-center justify-center font-bold text-2xl bg-blue-100 text-blue-500">3</div>
          <img className="md:h-30 md:w-auto w-30 h-auto" src="\assets\imgs\icon_step_3.webp" alt="" />
          <div>
            <p className="font-black text-xl">Thanh toán</p>
            <p className="text-gray-600">
              Hoàn thành bước thanh toán và sẵn sàng cho chuyến đi ngay thôi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingWith