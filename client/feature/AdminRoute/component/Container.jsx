function Container({ children, className, ...props }) {
  return (
    <div {...props} className={[className, "bg-white rounded-xl shadow p-5"].join(' ')}>
      {children}
    </div>
  )
}

export default Container