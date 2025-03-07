import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";

function DisplayOption({ view, setView }) {
  return (
    <div className="flex justify-between border-b pb-3 border-gray-300">
      <div className="flex gap-3">
        <button className={[view === 'list' ? "text-blue-500" : "text-gray-300", "size-10 rounded-lg border text-xl"].join(' ')} onClick={e => setView('list')}>
          <FontAwesomeIcon icon={faList} />
        </button>
        <button className={[view === 'grid' ? "text-blue-500" : "text-gray-300", "size-10 rounded-lg border text-xl"].join(' ')} onClick={e => setView('grid')}>
          <FontAwesomeIcon icon={faTableCells} />
        </button>
      </div>
      <div className="flex gap-3 items-center ">
        <label>Sắp xếp theo</label>
        <Select className="w-30" defaultValue="mac_dinh" options={[
          { value: 'mac_dinh', label: 'Mặc định' },
          { value: 'az', label: 'AZ' },
          { value: 'za', label: 'ZA' },
        ]} />
      </div>
    </div>
  )
}

export default DisplayOption