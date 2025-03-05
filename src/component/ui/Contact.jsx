function Contact() {
  return (
    <div className="xl:mx-25 lg:mx-10 mx-5 rounded-2xl bg-green-600 text-white py-10 text-center p-5  flex flex-col items-center gap-10 relative">
      <div className="md:block hidden w-screen bg-gray-500 -z-1 translate-y-25" style={{ height: "1px" }}></div>
      <div className="max-w-200">
        <p className="text-4xl font-bold">Theo dõi và cập nhật tin tức mới nhất</p>
        <p>Vinh hạnh của chúng tôi là mang đến cho bạn những chuyến đi đáng nhớ. Mang đến cho bạn những chuyến đi đầy cảm hứng. Khám phá những vùng đất mới. Tự do khám phá cùng chúng tôi.</p>
      </div>
      <div className="bg-white rounded-full p-2">
        <input className="outline-0 text-black px-5" placeholder="Nhập email của bạn" type="email" />
        <button className="bg-green-600 text-white px-5 py-2 rounded-full">Theo dõi</button>
      </div>
    </div>
  )
}

export default Contact