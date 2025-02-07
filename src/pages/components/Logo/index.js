import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Logo({ className, ...props }) {
  return (
    <div className={[className, "flex flex-col items-center gap-1"].join(' ')} {...props}>
      <FontAwesomeIcon icon={faPaperPlane} size="2x" />
      <p className="uppercase font-bold text-sm">travellingo</p>
    </div>
  )
}


export default Logo