import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const guessAccount = [
  { key: '1', label: <Link to="/account/login">Đăng nhập</Link> },
  { key: '2', label: <Link to="/account/register">Đăng kí</Link> },
]

const authorizeAccount = [
  { key: '1', label: <Link to="/">Đăng nhập</Link> },
  { key: '2', label: <Link to="/">Đăng kí</Link> },
]

function AccountIcon({ }) {
  useEffect(function () {

  }, [])

  return (
    <Dropdown menu={{ items: guessAccount }} placement="bottom" arrow>
      <Link to="/account/login"><FontAwesomeIcon icon={faCircleUser} size="2xl" /></Link>
    </Dropdown>
  )
}

export default AccountIcon