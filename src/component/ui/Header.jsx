import { Breadcrumb } from "antd"

function Header({ items, params }) {
  return (
    <>
      <img className="absolute -z-1 right-0 top-0 h-full object-cover w-full bg-green-600" src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/bg-brea.png?1720155052070" alt="" />
      <Breadcrumb items={items} params={params} separator={<p className="text-white text-lg px-5">/</p>} />
    </>
  )
}

export default Header