import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccount, getUserInfo } from "../../redux/authSlice";

import API from "../../Api";

const guessAccount = [
  { key: '1', label: <Link className="pr-5" to="/account/login">Đăng nhập</Link> },
  { key: '2', label: <Link className="pr-5" to="/account/register">Đăng kí</Link> },
]

function LogoutButton() {
  const dispatch = useDispatch()

  function onClick(e) {
    API.post('/account/logout')
      .then(function (response) {
        dispatch(getUserInfo())
      })
  }

  return (
    <button color="red" variant="outlined" className="pr-5" onClick={onClick}>Đăng suất</button>
  )
}

const authorizeAccount = [
  { key: '1', label: <Link className="pr-5" to="/">Tài khoản</Link> },
  { key: '2', label: <Link className="pr-5" to="/">Giỏ hàng</Link> },
  { key: '3', label: <Link className="pr-5" to="/">Tour yêu thích</Link> },
  { key: '4', label: <LogoutButton /> },
]

function AccountIcon({ }) {
  const account = useSelector(getAccount)

  return (
    <Dropdown menu={{ items: account == null ? guessAccount : authorizeAccount }} placement="bottom" arrow>
      <Link to={account == null ? "/account/login" : "/account"}><FontAwesomeIcon icon={faCircleUser} size="2xl" /></Link>
    </Dropdown>
  )
}

export default AccountIcon