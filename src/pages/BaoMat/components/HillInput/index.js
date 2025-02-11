import { Col, Divider, Input, InputNumber, Row } from "antd";
import { useRef, useState } from "react";

function HillInput({ }) {
  const form = useRef()
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

      <form ref={form} className="flex-grow flex flex-col gap-5 items-center justify-center" onChange={onChange}>
        {new Array(row).fill().map((i, j) => (
          <Row key={j} gutter={10}>
            {new Array(row).fill().map((_i, _j) => (
              <Col className="max-w-1/3" key={_j} style={{ width: `${100 / row}%` }}>
                <Input variant="filled" name={`${_j}_${j}`} />
              </Col>
            ))}
          </Row>
        ))}
      </form>
    </div>
  )
}

export default HillInput