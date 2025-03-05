function Container({ children, className, ...props }) {
  return (
    <div {...props} className={[className, "xl:px-50 lg:px-30 md:px-20 px-10"].join(' ')} >
      {children}
    </div>
  )
}

export default Container