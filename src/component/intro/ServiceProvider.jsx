import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ServiceProvide({ icon, title, content }) {
  return (
    <div className="md:flex-col md:flex grid grid-cols-[80px_1fr] md:gap-5 text-center items-center">
      <div className="flex justify-center items-center md:size-40 md:border-4 border-green-600 rounded-full">
        <FontAwesomeIcon className="text-green-600 md:text-7xl text-4xl" icon={icon} />
      </div>
      <div className="md:text-center text-left">
        <p className="text-xl font-bold uppercase">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ServiceProvide