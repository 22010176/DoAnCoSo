import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import { getAccount, getUserInfo } from "redux/authSlice"

function ProtectAccountRoute({ children }) {
  const account = useSelector(getAccount)
  const [Element, setElement] = useState()

  useEffect(function () {
    if (account === 'pending') {
      console.log(account)
      return
    }
    setElement(account ? children : <Navigate to="/" />)
  }, [account])

  return Element
}

export default ProtectAccountRoute
