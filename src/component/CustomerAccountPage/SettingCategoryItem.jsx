import { Button } from "antd"

function SettingCategoryItem({ item }) {
  return (
    <div className="grid grid-cols-[3fr_1fr] py-3 gap-5 w-full md:items-baseline items-center">
      <div className="grid sm:grid-cols-[1fr_2fr] gap-3">
        <p className="text-lg font-semibold text-nowrap">{item?.title}</p>
        <p>{item?.value}</p>
      </div>
      <Button variant="link" color="blue">
        <p className="font-bold text-lg">Edit</p>
      </Button>
    </div>
  )
}

export default SettingCategoryItem