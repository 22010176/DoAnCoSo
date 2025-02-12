import { Button, Flex, Upload } from "antd"
import TextArea from "antd/es/input/TextArea"
import { UploadOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux";
import cypherSlice from "../../baomatReducer";
import { getCypherOutput, getMessageInput } from "../../../../redux/selectors";
import copySlice from "../../../reducers/copyReducer";

function ResultOutput() {
  const dispatch = useDispatch()
  const messageInput = useSelector(getMessageInput)
  const messageOutput = useSelector(getCypherOutput)

  function onInputChange(e) {
    dispatch(cypherSlice.actions.updateInput({ message: e.target.value }))
  }

  function onInputCopyButtonClick(e) {
    dispatch(copySlice.actions.copy(messageInput))
  }

  function onOutputCopyButtonClick(e) {
    dispatch(copySlice.actions.copy(messageOutput))
  }

  return (
    <div className='flex flex-col gap-3 border rounded-lg w-full p-3 bg-white shadow'>
      <Flex className='gap-3'>
        <h1 className='text-xl font-bold'>Input</h1>
        <TextArea value={messageInput} className='resize-none' autoSize={{ minRows: 4, maxRows: 4 }} onChange={onInputChange} />
        <Flex vertical className='gap-2'>
          <Upload>
            <Button size="large" variant="filled" color="blue">
              <UploadOutlined />
            </Button>
          </Upload>
          <Button color='primary' variant='filled' onClick={onInputCopyButtonClick}>
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </Flex>
      </Flex>
      <div className='w-full h-0.5 bg-gray-400'></div>

      <Flex className='gap-3'>
        <h1 className='text-xl font-bold'>Result</h1>
        <p className='rounded-lg px-2 py-1 w-full border-1 border-gray-300 bg-slate-50 text-black' autoSize={{ minRows: 2, maxRows: 4 }}>
          {messageOutput}
        </p>

        <Flex vertical className='gap-2'>
          <Button color='primary' variant='filled' onClick={onOutputCopyButtonClick}>
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}

export default ResultOutput