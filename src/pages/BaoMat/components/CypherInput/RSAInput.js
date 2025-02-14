import { useDispatch, useSelector } from "react-redux"

import cypherSlice from "../../cypherSlice"
import { getRSAInput } from "../../../../redux/selectors"
import { isPrime } from "../../../../utilities/number"
import { InputNumber } from "antd"
import { checkE, findNextD, findNextE } from "../../../../utilities/rsa"
import { useEffect, useMemo } from "react"

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

function CInput({ ...props }) {
  return (
    <input {...props} className={[props.className, "border rounded-md border-gray-200 px-3 h-7 w-25 focus:outline-none"].join(' ')} />
  )
}

function RSAInput() {
  const dispatch = useDispatch()
  const message = JSON.parse(useSelector(getRSAInput))
  const enableE_D = useMemo(() =>
    isPrime(message.q) && isPrime(message.p),
    [message.q, message.p])

  function onPChange(e) {
    dispatch(cypherSlice.actions.changeP(e.target.value))
  }

  function onQChange(e) {
    dispatch(cypherSlice.actions.changeQ(e.target.value))
  }

  function onEChange(e) {

  }

  function onDChange(e) {

  }

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">P:</h1>
        <CInput onBlur={onPChange} type="number" />
        {/* <InputNumber value={message.p} min={0} onChange={onPChange} /> */}
        <h1 className="text-xl font-bold">Q:</h1>
        <CInput onBlur={onQChange} type="number" />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">E:</h1>
        <CInput onBlur={onEChange} type="number" />
        <h1 className="text-xl font-bold">D:</h1>
        <CInput onBlur={onDChange} type="number" />
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