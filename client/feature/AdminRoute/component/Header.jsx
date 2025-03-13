function Header({ children, className }) {
  return (
    <div className={[className, "bg-white font-bold text-2xl uppercase border-l-10 border-purple-700 p-5 rounded-2xl shadow"].join(' ')}>
      {children}
    </div>
  )
}

export default Header