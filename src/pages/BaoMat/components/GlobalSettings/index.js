import { Button, Flex, Select } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { cypherName } from "../../../../utilities/crypto"
import cypherSlice from "../../baomatReducer"
import { getCaesarInput, getCipherInput, getCypher, getCypherName } from "../../../../redux/selectors"
import { useCallback, useMemo } from "react"

function GlobalSettings({ }) {
  const dispatch = useDispatch()
  const cinput = JSON.parse(useSelector(getCipherInput))

  function changeCypherMode(e) {
    dispatch(cypherSlice.actions.changeCypher(e))
    dispatch(cypherSlice.actions.resetInput())
  }

  function enscriptOnClick(e) {
    dispatch(cypherSlice.actions.enscript(cinput))
  }

  function descriptOnClick(e) {
    dispatch(cypherSlice.actions.descript(cinput))
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