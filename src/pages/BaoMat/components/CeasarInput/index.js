import { Input, InputNumber } from "antd"
import UploadButton from "../UploadButton"

function CaesarInput({ }) {
  return (
    <div className='flex gap-4 items-center'>
      <h1 className='text-xl font-bold'>K:</h1>
      <InputNumber size='large' className='w-10' defaultValue={1} value={0} min={0} />
    </div>
  )
}

export default CaesarInput