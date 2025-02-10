import { Input, InputNumber } from "antd"
import UploadButton from "../UploadButton"

function CaesarInput({ }) {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-4 items-center'>
      <h1 className='text-xl font-bold'>Message:</h1>
      <div className="flex gap-2">
        <Input size='large' />
        <UploadButton />
      </div>
      <h1 className='text-xl font-bold'>K:</h1>

      <InputNumber size='large' className='w-10' defaultValue={1} value={0} min={0} />
    </div>
  )
}

export default CaesarInput