import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { getAccount } from "@/redux/authSlice"

function ProtectUnAccountRoute({ children }) {
  const account = useSelector(getAccount)
  const [Element, setElement] = useState(children)
  const location = useLocation()

  // useEffect(function () {
  //   if (account === ('pending...')) return
  //   console.log(account)
  //   setElement(!account ? children : <Navigate to="/" />)
  // }, [account, location])

  return Element
}

export default ProtectUnAccountRoute
