import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faBookmark, faClipboard, faFileArrowUp, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, Col, Divider, Flex, Form, Input, Row, Select, Watermark, Typography, InputNumber, Empty } from 'antd'
import TextArea from 'antd/es/input/TextArea';

import AES from '../../utilities/aes';
import CryptoJS from '../../utilities/cryptojs'
import AffineInput from './components/AffineInput';
import VigenereInput from './components/VigenereInput';
import CaesarInput from './components/CeasarInput';

import { getCypher } from '../../redux/selectors'
import cypherSlice from './baomatReducer';


function DefaultInput({ }) {
  return (
    <Empty className='m-4' />
  )
}


function CypherInput({ cypher = '' }) {
  console.log(cypher)
  switch (cypher?.toLowerCase?.()) {
    case 'caesar': return <CaesarInput />
    default: return <DefaultInput />
  }
}


function BaoMatPage() {
  const dispatch = useDispatch()
  const [cypher, setCypher] = useState('caesar')

  useEffect(function () {
    dispatch(cypherSlice.actions.changeCypher({ cypherName: cypher }))
  }, [])
  console.log(useSelector(getCypher))


  function onCypherChange(e) {
    console.log(e)
    dispatch(cypherSlice.actions.changeCypher({ cypherName: e }))
    setCypher(useSelector(getCypher))
  }

  console.log(AES, CryptoJS)
  return (
    <div className='w-screen h-screen  bg-slate-300 p-50'>
      <Flex className='w-full h-full' gap="middle" vertical>
        <Flex className='w-full gap-2'>
          <Select className='w-36' defaultValue="caesar" onChange={onCypherChange}
            options={[
              { value: 'caesar', label: 'Caesar' },
              { value: 'affine', label: 'Affine' },
              { value: 'hill', label: 'Hill' },
              { value: 'vigenere', label: 'Vigenere' },
              { value: 'des', label: 'DES' },
              { value: 'aes', label: 'AES' },
              { value: 'rsa', label: 'RSA' },
            ]} />
          <Button variant='filled' color='cyan'>Enscript</Button>
          <Button variant='filled' color='red'>Descript</Button>

        </Flex>

        <div className='border rounded-lg w-full bg-white shadow p-3'>
          <CypherInput cypher={cypher} />
        </div>

        <div className='flex flex-col gap-3 border rounded-lg w-full p-3 bg-white shadow'>
          <Flex className='gap-3'>
            <h1 className='text-xl font-bold'>Input</h1>
            <TextArea className='resize-none' autoSize={{ minRows: 4, maxRows: 4 }} />
            <Flex vertical className='gap-2'>
              <Button color='primary' variant='outlined'>
                <FontAwesomeIcon icon={faClipboard} className='text-lg' />
              </Button>

              <Button color='primary' variant='outlined'>
                <FontAwesomeIcon icon={faBookmark} />
              </Button>
            </Flex>
          </Flex>
          <div className='w-full h-0.5 bg-gray-400'></div>

          <Flex className='gap-3'>
            <h1 className='text-xl font-bold'>Result</h1>
            <p className='rounded-lg px-2 py-1 w-full border-2 bg-slate-50 text-black' autoSize={{ minRows: 2, maxRows: 4 }}>
              d
            </p>

            <Flex vertical className='gap-2'>
              <Button color='primary' variant='outlined'>
                <FontAwesomeIcon icon={faClipboard} className='text-lg' />
              </Button>

              <Button color='primary' variant='outlined'>
                <FontAwesomeIcon icon={faBookmark} />
              </Button>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  )
}
export default BaoMatPage