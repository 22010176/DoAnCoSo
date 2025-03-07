function Container({ Element = "div", children, className, ...props }) {
  return (
    <Element {...props} className={[className, "lg:px-20 px-10"].join(' ')} >
      {children}
    </Element>
  )
}

export default Container