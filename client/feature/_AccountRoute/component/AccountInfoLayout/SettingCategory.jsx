import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function SettingCategory({ item }) {
  return (
    <Link to={item.to} className="cursor-pointer grid grid-cols-[30px_1fr] gap-5 p-3 items-center group-hover:text-blue-500 group-hover:underline">
      <FontAwesomeIcon icon={item?.icon} className="text-xl w-8" />
      <p className="font-semibold">{item?.title}</p>
    </Link>
  )
}

export default SettingCategory