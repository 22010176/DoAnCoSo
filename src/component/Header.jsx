import { Breadcrumb } from "antd"

import Container from './Container'

function Header({ Element = Container, items, params }) {
  return (
    <Element className="relative w-full flex items-center h-20">
      <img className="absolute -z-1 right-0 top-0 h-full object-cover w-full bg-green-600" src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/bg-brea.png?1720155052070" alt="" />
      <Breadcrumb items={items} params={params} separator={<p className="text-white text-lg px-5">/</p>} />
    </Element>
  )
}

export default Header