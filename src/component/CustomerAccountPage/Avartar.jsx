function CustomerAvartar({ image, name, level }) {
  return (
    <div className="flex gap-5 items-center">
      <img className="size-10 rounded-full" src="\assets\imgs\sp6.webp" alt="" />
      <div className="md:block hidden">
        <p className="text-lg text-white font-bold">Nguyễn Anh Ngọc Minh</p>
        <p className="text-yellow-600 font-semibold">Genius Cấp 1</p>
      </div>
    </div>
  )
}

export default CustomerAvartar