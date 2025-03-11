
function SettingCategoryItem({ item }) {
  return (
    <div className="flex justify-between items-start gap-3 w-full">
      <p className="text-lg font-bold text-nowrap">{item?.title}</p>
      <p className="text">{item?.value}</p>
    </div>
  )
}

export default SettingCategoryItem