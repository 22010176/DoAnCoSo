

function ProtectUnAccountRoute({ children }) {
  // const account = useSelector(getAccount)
  // const location = useLocation()
  // const [Element, setElement] = useState(children)

  // useEffect(function () {
  // if (account === defaultPending) return

  // setElement(!account ? children : <Navigate to="/" />)
  // }, [account, location])

  return children
}

export default ProtectUnAccountRoute
