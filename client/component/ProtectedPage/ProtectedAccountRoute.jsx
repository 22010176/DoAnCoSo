import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { defaultPending, getAccount } from "@/redux/authSlice"

function ProtectAccountRoute({ children }) {
  // const account = useSelector(getAccount)
  // const location = useLocation()
  // const [Element, setElement] = useState(children)

  // useEffect(function () {
  //   if (account === defaultPending) return

  //   setElement(account ? children : <Navigate to="/" />)
  // }, [account, location])

  return children
}

export default ProtectAccountRoute
