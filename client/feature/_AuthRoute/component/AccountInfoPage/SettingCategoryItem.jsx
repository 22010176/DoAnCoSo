
function SettingCategoryItem({ item }) {
  return (
    <div className="grid sm:grid-cols-[1fr_2fr] gap-3 w-full">
      <p className="text-lg font-semibold text-nowrap">{item?.title}</p>
      <p>{item?.value}</p>
    </div>
  )
}

export default SettingCategoryItem