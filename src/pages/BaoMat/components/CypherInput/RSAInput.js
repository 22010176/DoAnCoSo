import { useDispatch, useSelector } from "react-redux"

import cypherSlice from "../../cypherSlice"
import { getRSAInput } from "../../../../redux/selectors"
import { isPrime } from "../../../../utilities/number"
import { InputNumber } from "antd"

function KeyResult({ value = [] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {/* {value.map((i,j)=>)} */}
      <p className="text-lg">
        ({value.join(', ')})
      </p>
    </div>

  )
}

function RSAInput() {
  const dispatch = useDispatch()
  const message = JSON.parse(useSelector(getRSAInput))
  const enableE_D = isPrime(message.q) && isPrime(message.p)

  function onPChange(e) {
    dispatch(cypherSlice.actions.updateInput({ p: e, e: 0, d: 0 }))
  }

  function onQChange(e) {
    dispatch(cypherSlice.actions.updateInput({ q: e, e: 0, d: 0 }))
  }

  function onEChange(e) {
    dispatch(cypherSlice.actions.updateInput({ e: e, d: 0 }))
  }

  function onDChange(e) {
    dispatch(cypherSlice.actions.updateInput({ d: e }))
  }

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">P:</h1>
        <InputNumber value={message.p} min={0} onChange={onPChange} />
        <h1 className="text-xl font-bold">Q:</h1>
        <InputNumber value={message.q} min={0} onChange={onQChange} />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">E:</h1>
        <InputNumber value={message.e} min={0} onChange={onEChange} disabled={!enableE_D} />
        <h1 className="text-xl font-bold">D:</h1>
        <InputNumber value={message.d} min={0} onChange={onDChange} disabled={!enableE_D} />
      </div>
      <div className="flex-grow grid grid-cols-2">
        <div>
          <h1 className="font-bold text-xl">Public Key</h1>
          <KeyResult value={[1, 4]} />
        </div>
        <div>
          <h1 className="font-bold text-xl">Private Key</h1>
          <KeyResult value={[1, 4]} />
        </div>
      </div>
    </div>
  )
}

export default RSAInput