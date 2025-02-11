import { Empty } from "antd"
import AffineInput from "../AffineInput"
import CaesarInput from "../CeasarInput"
import VigenereInput from "../VigenereInput"
import HillInput from "../HillInput"
import DESInput from "../DESInput"
import AESInput from "../AESInput"
import RSAInput from "../RSAInput"
import { useSelector } from "react-redux"
import { getCypherName } from "../../../../redux/selectors"

function CInput() {
  switch (useSelector(getCypherName)) {
    case 'caesar': return <CaesarInput />
    case 'affine': return <AffineInput />
    case 'vigenere': return <VigenereInput />
    case 'hill': return <HillInput />
    case 'des': return <DESInput />
    case 'aes': return <AESInput />
    case 'rsa': return <RSAInput />
    default: return <Empty />
  }
}

function CypherInput({ }) {

  return (
    <div className='border rounded-lg w-full bg-white shadow p-3'>
      <CInput />
    </div>
  )
}

export default CypherInput