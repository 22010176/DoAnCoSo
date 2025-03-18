import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

function GoogleLoginButton() {
  function handleLogin() {
    window.open("/api/auth/google/login", "_self");
  }

  return (
    <Button variant="solid" color="blue" type="submit" size="large" className="w-full" onClick={handleLogin}>
      <FontAwesomeIcon icon={faGoogle} className="text-xl" />
      Đăng nhập bằng google
    </Button>
  )
}

export default GoogleLoginButton