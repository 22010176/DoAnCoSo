import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { defaultPending, getAccount } from "@/redux/authSlice"

function ProtectAdminRoute({ children }) {
  return children
  const account = useSelector(getAccount)
  const location = useLocation()
  const [Element, setElement] = useState(children)

  useEffect(function () {
    if (account === defaultPending) return

    setElement(account?.vaiTro === '1' ? children : <Navigate to="/" />)
  }, [account, location])

  return Element
}

export default ProtectAdminRoute
