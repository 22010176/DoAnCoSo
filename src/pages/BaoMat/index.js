import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faBookmark, faClipboard, faFileArrowUp, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, Col, Divider, Flex, Form, Input, Row, Select, Watermark, Typography, InputNumber, Empty } from 'antd'
import TextArea from 'antd/es/input/TextArea';

import { getCypher, getCounter, getCypherName } from '../../redux/selectors'
import cypherSlice from './baomatReducer';

import AES from '../../utilities/aes';
import CryptoJS from '../../utilities/cryptojs'

import AffineInput from './components/AffineInput';
import VigenereInput from './components/VigenereInput';
import CaesarInput from './components/CeasarInput';

import { cypherName } from '../../utilities/crypto';
import UploadButton from './components/UploadButton';
import CypherInput from './components/CypherInput';
import GlobalSettings from './components/GlobalSettings';
import ResultOutput from './components/ResultOutput';


console.log()
function BaoMatPage() {
  const dispatch = useDispatch()

  useEffect(function () {
  }, [])


  return (
    <div className='w-screen h-screen bg-slate-300 p-40'>
      <Flex className='w-full h-full' gap="middle" vertical>
        <GlobalSettings />
        <CypherInput />
        <ResultOutput />
      </Flex>
    </div>
  )
}
export default BaoMatPage