function Container({ Element = "div", children, className, ...props }) {
  return (
    <Element {...props} className={[className, "xl:px-40 lg:px-30 md:px-20 px-10"].join(' ')} >
      {children}
    </Element>
  )
}

export default Container