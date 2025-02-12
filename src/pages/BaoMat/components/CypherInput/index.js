import { useRef, useState } from "react"
import { Col, Empty, Input, InputNumber, Row } from "antd"

import { useDispatch, useSelector } from "react-redux"
import { getAffineInput, getCaesarInput, getCypherName, getKeyInput, getRSAInput } from "../../../../redux/selectors"
import cypherSlice from "../../baomatReducer"

function CaesarInput() {
  const dispatch = useDispatch()
  const message = JSON.parse(useSelector(getCaesarInput))

  function onChange(e) {
    dispatch(cypherSlice.actions.updateInput({ k: e }))
  }

  return (
    <div className='flex gap-4 items-center'>
      <h1 className='text-xl font-bold'>K:</h1>
      <InputNumber name="k" className='w-10' defaultValue={1} min={0} value={message.k} onChange={onChange} />
    </div>
  )
}

function AffineInput() {
  const dispatch = useDispatch()
  const message = JSON.parse(useSelector(getAffineInput))

  function onAChange(e) {
    dispatch(cypherSlice.actions.updateInput({ a: e }))
  }

  function onBChange(e) {
    dispatch(cypherSlice.actions.updateInput({ b: e }))
  }

  return (
    <div className='grid grid-cols-2 mx-10 gap-4 items-center'>
      <div className="flex gap-4">
        <h1 className='text-xl font-bold'>A:</h1>
        <InputNumber defaultValue={1} value={message.a} min={0} changeOnWheel onChange={onAChange} />
      </div>
      <div className="flex gap-4">
        <h1 className='text-xl font-bold'>B:</h1>
        <InputNumber defaultValue={1} value={message.b} min={0} changeOnWheel onChange={onBChange} />
      </div>
    </div>
  )
}

function HillInput() {
  const [row, setRow] = useState(1)

  function onChange(e) {
    console.log(Object.fromEntries(new FormData(form.current)))
  }

  return (
    <div className="flex gap-5">

      <div>
        <h1 className="text-lg font-bold">Row:</h1>
        <InputNumber min={1} max={5} defaultValue={row} onChange={e => setRow(e)} />
      </div>

      <div className="flex-grow flex flex-col gap-5 items-center justify-center" onChange={onChange}>
        <h1 className="text-lg font-bold self-start">Matrix:</h1>
        {new Array(row).fill().map((i, j) => (

          <Row key={j} gutter={10}>
            {new Array(row).fill().map((_i, _j) => (
              <Col className="max-w-1/3" key={_j} style={{ width: `${100 / row}%` }}>
                <Input variant="filled" name={`${_j}_${j}`} />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  )
}

function KeyInput() {
  const dispatch = useDispatch()
  const message = JSON.parse(useSelector(getKeyInput))

  function onChange(e) {
    dispatch(cypherSlice.actions.updateInput({ key: e.target.value }))
  }

  return (
    <div className="flex gap-5">
      <h1 className="text-lg font-bold">Key:</h1>
      <Input value={message.key} onChange={onChange} />
    </div>
  )
}

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

  function onPChange(e) {
    dispatch(cypherSlice.actions.updateInput({ p: e }))
  }

  function onQChange(e) {
    dispatch(cypherSlice.actions.updateInput({ q: e }))
  }

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3">
        <h1 className="text-xl font-bold">P:</h1>
        <InputNumber value={message.p} min={0} onChange={onPChange} />
        <h1 className="text-xl font-bold">Q:</h1>
        <InputNumber value={message.q} min={0} onChange={onQChange} />
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

function CInput() {
  switch (useSelector(getCypherName)) {
    case 'caesar': return <CaesarInput />
    case 'affine': return <AffineInput />
    case 'hill': return <HillInput />
    case 'des':
    case 'vigenere':
    case 'aes': return <KeyInput />
    case 'rsa': return <RSAInput />
    default: return <Empty />
  }
}

function CypherInput() {
  return (
    <div className='border rounded-lg w-full bg-white shadow px-4 py-3'>
      <CInput />
    </div>
  )
}

export default CypherInput