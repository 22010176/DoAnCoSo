function Container({ As = 'div', children, className, ...props }) {
  return (
    <As {...props} className={[className, "bg-white rounded-xl shadow p-5"].join(' ')}>
      {children}
    </As>
  )
}

export default Container