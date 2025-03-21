import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function LoginType() {
  const [type, setType] = useState('guess')

  function onClickUser() { setType('guess') }
  function onClickAdmin() { setType('admin') }

  return (
    <div className="flex md:flex-row flex-col justify-center md:gap-50 gap-10">
      <button className="flex flex-col gap-2 text-center" onClick={onClickUser}>
        <div className="relative">
          <img className="size-50 border-3 border-green-700 rounded-xl text-green-500 overflow-hidden" src="\assets\imgs\userLogin.jpg" alt="" />
          {type === 'guess' && <div className="flex items-center justify-center rounded-full text-white absolute size-8 bg-green-500 -right-2 -bottom-2">
            <FontAwesomeIcon icon={faCheck} />
          </div>}
        </div>
        <p className="text-2xl font-bold uppercase">USER</p>
      </button>
      <button className="flex flex-col gap-2 text-center" onClick={onClickAdmin}>
        <div className="relative">
          <img className="size-50 border-3 border-green-700 rounded-xl text-green-500 overflow-hidden" src="\assets\imgs\adminLogin.jpg" alt="" />
          {type === 'admin' && <div className="flex items-center justify-center rounded-full text-white absolute size-8 bg-green-500 -right-2 -bottom-2">
            <FontAwesomeIcon icon={faCheck} />
          </div>}
        </div>
        <p className="text-2xl font-bold uppercase">admin</p>
      </button>
    </div>
  )
}

export default LoginType