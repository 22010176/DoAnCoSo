import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from "antd";


function UploadButton({ ...props }) {
  return (
    <Upload {...props}>
      <Button size="large" variant="filled" color="blue" icon={<UploadOutlined />} />
    </Upload>
  )
}

export default UploadButton