import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SettingCategory({ item }) {
  return (
    <button className="cursor-pointer grid grid-cols-[30px_1fr] gap-5 p-3 items-center group-hover:text-blue-500 group-hover:underline">
      <FontAwesomeIcon icon={item?.icon} className="text-xl " />
      <p className="text">{item?.title}</p>
    </button>
  )
}

export default SettingCategory