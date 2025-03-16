import { forwardRef } from "react"

const Container = forwardRef(function ({ As = 'div', children, className, ...props }, ref) {
  return (
    <As ref={ref} {...props} className={[className, "bg-white rounded-xl shadow p-5"].join(' ')}>
      {children}
    </As>
  )
})

export default Container