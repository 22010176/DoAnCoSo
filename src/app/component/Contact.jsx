function Contact() {
  return (
    <div className="bg-blue-500 text-white py-10 text-center rounded-2xl p-5 max-w-350 mx-auto flex flex-col items-center gap-10 relative">
      <div className="w-screen h-0.5 bg-gray-500 -z-1 translate-y-25"></div>
      <div className="max-w-200">
        <p className="text-4xl font-bold">Theo dõi và cập nhật tin tức mới nhất</p>
        <p>Vinh hạnh của chúng tôi là mang đến cho bạn những chuyến đi đáng nhớ. Mang đến cho bạn những chuyến đi đầy cảm hứng. Khám phá những vùng đất mới. Tự do khám phá cùng chúng tôi.</p>
      </div>
      <div className="bg-white rounded-full p-2">
        <input className="outline-0 text-black px-5 min-w-80" placeholder="Nhập email của bạn" type="email" />
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full">Theo dõi</button>
      </div>
    </div>
  )
}

export default Contact