import { Select } from "antd"
import { alphabetOptions } from "../../../../utilities/crypto"
import cypherSlice from "../../baomatReducer"
import { useDispatch, useSelector } from "react-redux"
import { getCypherAlphabet } from "../../../../redux/selectors"

function AlphabetSettings() {
  const dispatch = useDispatch()

  function onChangeAlphabet(e) {
    dispatch(cypherSlice.actions.setAlphabet(e))
  }

  return (
    <div className="border rounded-lg w-full p-4 bg-white shadow flex gap-3">
      <h1 className="text-xl font-bold">Alphabets:</h1>
      <Select
        mode="multiple"
        className="w-full"
        defaultValue={alphabetOptions}
        value={useSelector(getCypherAlphabet)}
        onChange={onChangeAlphabet}
        options={alphabetOptions.map(i => ({ value: i, label: i }))} />
    </div>
  )
}

export default AlphabetSettings