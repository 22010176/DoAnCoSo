function Container({ Element = "div", children, className, ...props }) {
  return (
    <Element {...props} className={[className, "2xl:px-80 xl:px-70 md:px-20 px-10"].join(' ')} >
      {children}
    </Element>
  )
}

export default Container