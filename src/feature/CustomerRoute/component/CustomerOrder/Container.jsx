function Container({ Element = "div", children, className, ...props }) {
  return (
    <Element {...props} className={[className, "xl:px-30 lg:px-20 md:px-10 px-5"].join(' ')} >
      {children}
    </Element>
  )
}

export default Container