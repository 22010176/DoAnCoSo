function Header({ children }) {
  return (
    <div className="bg-white font-bold text-2xl uppercase border-l-10 border-purple-700 p-5 rounded-2xl shadow">
      {children}
    </div>
  )
}

export default Header