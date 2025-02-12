import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CypherInput from './components/CypherInput';
import GlobalSettings from './components/GlobalSettings';
import ResultOutput from './components/ResultOutput';
import AlphabetSettings from './components/AlphabetSettings';
import { Flex } from 'antd';


console.log()
function BaoMatPage() {
  const dispatch = useDispatch()

  useEffect(function () {
  }, [])

  return (
    <div className='w-screen h-screen bg-slate-300 p-40'>
      <Flex className='w-full h-full' gap="middle" vertical>
        <GlobalSettings />
        <AlphabetSettings />
        <CypherInput />
        <ResultOutput />
      </Flex>
    </div>
  )
}
export default BaoMatPage