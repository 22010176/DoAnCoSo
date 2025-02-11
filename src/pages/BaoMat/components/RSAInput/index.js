import { InputNumber } from "antd";

function KeyResult({ value = [] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {/* {value.map((i,j)=>)} */}
    </div>
  )
}
function RSAInput({ }) {
  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">P:</h1>
        <InputNumber />
        <h1 className="text-xl font-bold">Q:</h1>
        <InputNumber />
      </div>
      <div className="flex-grow grid grid-cols-2">
        <div>
          <h1 className="font-bold">Public Key</h1>
          <KeyResult value={[1, 4]} />
        </div>
        <div>
          <h1 className="font-bold">Private Key</h1>
          <KeyResult value={[1, 4]} />
        </div>
      </div>
    </div>
  )
}

export default RSAInput