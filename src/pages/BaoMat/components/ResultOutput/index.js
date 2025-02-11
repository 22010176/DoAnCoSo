import { Button, Flex } from "antd"
import TextArea from "antd/es/input/TextArea"
import UploadButton from "../UploadButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"

function ResultOutput({ }) {
  return (

    <div className='flex flex-col gap-3 border rounded-lg w-full p-3 bg-white shadow'>
      <Flex className='gap-3'>
        <h1 className='text-xl font-bold'>Input</h1>
        <TextArea className='resize-none' autoSize={{ minRows: 4, maxRows: 4 }} />
        <Flex vertical className='gap-2'>
          <UploadButton />

          <Button color='primary' variant='outlined'>
            <FontAwesomeIcon icon={faClipboard} className='text-lg' />
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
        </Flex>
      </Flex>
    </div>
  )
}

export default ResultOutput