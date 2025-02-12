import { Button, Flex, Select } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { cypherName } from "../../../../utilities/crypto"
import cypherSlice from "../../baomatReducer"

function GlobalSettings({ }) {
  const dispatch = useDispatch()

  function changeCypherMode(e) {
    dispatch(cypherSlice.actions.changeCypher(e))
  }

  function enscriptOnClick(e) {
    dispatch(cypherSlice.actions.enscript())
  }

  function descriptOnClick(e) {
    dispatch(cypherSlice.actions.descript())
  }

  return (
    <Flex className='w-full gap-2'>
      <Select
        className='w-36'
        defaultValue="caesar"
        onChange={changeCypherMode}
        options={cypherName.map(i => ({ value: i.lower, label: i.cap }))} />
      <Button variant='filled' color='cyan' onClick={enscriptOnClick}>Enscript</Button>
      <Button variant='filled' color='red' onClick={descriptOnClick}>Descript</Button>
    </Flex>
  )
}

export default GlobalSettings 