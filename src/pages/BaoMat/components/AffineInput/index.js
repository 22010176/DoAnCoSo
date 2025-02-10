import { Input, InputNumber } from "antd"


function AffineInput() {
  return (
    <div className='grid grid-cols-[auto_1fr] mx-10 gap-4 items-center'>

      <h1 className='text-xl font-bold'>A:</h1>
      <InputNumber style={{ width: "20%" }} size='large' defaultValue={1} value={0} min={0} changeOnWheel />
      <h1 className='text-xl font-bold'>B:</h1>
      <InputNumber style={{ width: "20%" }} size='large' defaultValue={1} value={0} min={0} changeOnWheel />
    </div>
  )
}

export default AffineInput