import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "antd"

function LoginButton() {
  return (
    <Button size="large" className="flex px-5 py-2 border rounded-2xl items-center gap-5">
      <FontAwesomeIcon icon={faEnvelope} size="2x" className="w-10" />
      <p>Đăng nhập bằng Email</p>
    </Button>
  )
}

export default LoginButton