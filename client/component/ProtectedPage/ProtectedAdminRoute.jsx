import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { getAccount } from "@/redux/authSlice"

function ProtectAdminRoute({ children }) {
  const account = useSelector(getAccount)
  const location = useLocation()

  const [Element, setElement] = useState()

  return children

  useEffect(function () {
    if (account === 'pending') return

    setElement(account?.vaiTro === '1' ? children : <Navigate to="/" />)
  }, [account, location])

  return Element
}

export default ProtectAdminRoute
