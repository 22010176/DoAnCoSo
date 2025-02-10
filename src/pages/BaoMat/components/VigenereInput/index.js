import { Input } from "antd"

function VigenereInput({ }) {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-4 items-center mr-90'>
      <h1 className='text-xl font-bold'>Message:</h1>
      <Input size='large' />
      <h1 className='text-xl font-bold'>Key:</h1>
      <Input size='large' />
    </div>
  )
}

export default VigenereInput