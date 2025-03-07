import { Checkbox } from "antd"

function OptionItem({ children }) {
  return (
    <div className="flex gap-2">
      <Checkbox />
      <label>{children}</label>
    </div>
  )
}

export default OptionItem