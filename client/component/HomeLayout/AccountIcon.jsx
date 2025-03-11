import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAccount, logOutUser } from "@/redux/authSlice";



function LogoutButton() {
  const dispatch = useDispatch()

  function onClick(e) {
    dispatch(logOutUser())
  }

  return (
    <button className="pr-5" onClick={onClick}>Đăng suất</button>
  )
}

const guessAccount = [
  { key: '1', label: <Link className="pr-5" to="/account/login">Đăng nhập</Link> },
  { key: '2', label: <Link className="pr-5" to="/account/register">Đăng kí</Link> },
]

const adminAccount = [
  { key: '1', label: <Link className="pr-5" to="/account">Tài khoản</Link> },
  { key: '2', label: <Link className="pr-5" to="/orders">Giỏ hàng</Link> },
  { key: '3', label: <Link className="pr-5" to="/">Tour yêu thích</Link> },
  { key: '4', label: <Link className="pr-5" to="/dashboard">Quản lý</Link> },
  { key: '5', label: <LogoutButton /> },
]
const authorizeAccount = [
  { key: '1', label: <Link className="pr-5" to="/account">Tài khoản</Link> },
  { key: '2', label: <Link className="pr-5" to="/orders">Giỏ hàng</Link> },
  { key: '3', label: <Link className="pr-5" to="/">Tour yêu thích</Link> },
  { key: '4', label: <LogoutButton /> },
]

function AccountIcon({ }) {
  const account = useSelector(getAccount)
  const items = account == null ? guessAccount : account.vaiTro === '1' ? adminAccount : authorizeAccount

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Link to={account == null ? "/account/login" : "/account"}><FontAwesomeIcon icon={faCircleUser} size="2xl" /></Link>
    </Dropdown>
  )
}

export default AccountIcon