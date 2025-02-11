import { Button, Flex, Select } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { cypherName } from "../../../../utilities/crypto"
import cypherSlice from "../../baomatReducer"

function GlobalSettings({ }) {
  const dispatch = useDispatch()

  function changeCypherMode(e) {
    dispatch(cypherSlice.actions.changeCypher(e))
  }

  return (
    <Flex className='w-full gap-2'>
      <Select
        className='w-36'
        defaultValue="caesar"
        onChange={changeCypherMode}
        options={cypherName.map(i => ({ value: i.lower, label: i.cap }))} />
      <Button variant='filled' color='cyan'>Enscript</Button>
      <Button variant='filled' color='red'>Descript</Button>
    </Flex>
  )
}

export default GlobalSettings 