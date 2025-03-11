import { useSelector } from "react-redux"
import { getAccount } from "@/redux/authSlice"

function CustomerAvartar({ }) {
  const user = useSelector(getAccount)
  console.log(user)
  return (
    <div className="flex gap-5 items-center">
      <img className="size-10 rounded-full" src="\assets\imgs\sp6.webp" alt="" />
      <div className="md:block hidden">
        <p className="text-lg text-white font-bold">{[user?.ho, user?.ten].join(' ')}</p>
      </div>
    </div>
  )
}

export default CustomerAvartar