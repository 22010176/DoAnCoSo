import { useSelector } from "react-redux"
import { getAccount } from "@/redux/authSlice"

function CustomerAvartar({ }) {
  const user = useSelector(getAccount)
  return (
    <div className="flex gap-5 items-center">
      <img className="size-10 rounded-full" src="\assets\imgs\sp6.webp" alt="" />
      <div className="md:block hidden">
        <p className="text-lg text-white font-bold">Nguyễn Anh Ngọc Minh</p>
      </div>
    </div>
  )
}

export default CustomerAvartar