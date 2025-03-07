function Container({ Element = "div", children, className, ...props }) {
  return (
    <Element {...props} className={[className, "2xl:px-60 xl:px-20 md:px-15  px-10"].join(' ')} >
      {children}
    </Element>
  )
}

export default Container