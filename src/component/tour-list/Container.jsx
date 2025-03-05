function Container({ children, className, ...props }) {
  return (
    <div {...props} className={[className, "xl:px-40 md:px-30 px-20"].join(' ')} >
      {children}
    </div>
  )
}

export default Container