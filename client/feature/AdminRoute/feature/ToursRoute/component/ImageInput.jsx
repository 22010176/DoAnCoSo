import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

function ImageInput({ src, onClick }) {
  return (
    <div className="grid border-b pb-1 grid-cols-[1fr_auto] gap-2 items-center mb-2">
      <img className="max-h-20 w-auto" src={src} alt="" />
      <Button onClick={onClick} size="small" color="red" variant="outlined">
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  )
}

export default ImageInput