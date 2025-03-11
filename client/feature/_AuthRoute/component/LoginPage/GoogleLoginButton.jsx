import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ConfigProvider } from "antd"

import { useEffect } from "react"


// 
function GoogleLoginButton() {
  useEffect(function () {
    // const data = Object.fromEntries(document.location.toString().split('#')[1].split('&').map(i => i.split('=')))
    // const access_token = data.access_token
    // console.log(access_token)
    // if (!access_token) return

    // axios.get('https://www.googleapis.com/drive/v2/files', {
    //   headers: {
    //     Authorization: 'Bearer ' + access_token
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

  }, [])

  return (
    <form action="https://accounts.google.com/o/oauth2/v2/auth" >
      <input type="hidden" name="client_id" value="" />
      <input type="hidden" name="redirect_uri" value="http://localhost:3000/account/login" />
      <input type="hidden" name="response_type" value="token" />
      <input type="hidden" name="scope" value="https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/calendar.readonly" />
      <input type="hidden" name="include_granted_scopes" value="true" />
      <input type="hidden" name="state" value="pass-through value" />
      <Button variant="solid" color="blue" type="submit" size="large" className="w-full" >
        <FontAwesomeIcon icon={faGoogle} className="text-xl" />
        Đăng nhập bằng google
      </Button>
    </form >
  )
}

export default GoogleLoginButton