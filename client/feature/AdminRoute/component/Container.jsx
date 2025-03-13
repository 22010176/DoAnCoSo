function Container({ children, className, ...props }) {
  return (
    <div {...props} className={[className, "bg-white grow rounded-xl shadow overflow-hidden"].join(' ')}>
      {children}
    </div>
  )
}

export default Container