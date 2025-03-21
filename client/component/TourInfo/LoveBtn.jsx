import { TourResource } from "@/Api";
import { getAccount } from "@/redux/authSlice";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function LoveButton({ id, love, callback }) {
  const user = useSelector(getAccount)

  async function onClick(e) {
    if (!id) return;

    let result
    if (!love) result = await TourResource.post('/favourite', { id })
      .then(res => res.data)

    else result = await TourResource.delete('/favourite', { data: { id } })
      .then(res => res.data)

    console.log(result)
    try {
      result.success && callback(e)
    }
    catch (error) {
      console.log(error)
    }
    e.stopPropagation()
  }

  return (
    <>
      <button
        className={[
          "absolute text-white right-3 top-3 size-8 rounded flex justify-center items-center",
          !user && 'hidden pointer-events-none',
          love ? "bg-red-600/50 hover:bg-red-600/70" : ' bg-black/50 hover:bg-black/70'].join(' ')}
        onClick={onClick}    >
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </button>
    </>
  );
}

export default LoveButton;