import { createContext } from "react";

const TourContext = createContext()

export const initialState = {
  images: [],
  schedules: [],
  info: {}
}

export function reducer(state, action) {
  const _state = JSON.parse(JSON.stringify(state))

  let name, value, index
  switch (action.type) {
    case "updateInput":
      ({ name, value } = action.payload)
      _state.info[name] = value
      break

    case 'updateImage':
      if (_state.images.length == 5) break

      _state.images = [..._state.images, action.payload]
      break

    case 'deleteImage':
      const url = action.payload
      _state.images = _state.images?.filter(i => !!i && i !== url)
      break

    case 'addSchedule':
      const newSchedule = {
        index: _state.schedules?.length,
        title: "",
        content: ""
      }
      _state.schedules = [..._state.schedules, newSchedule]
      break

    case 'scheduleUpdate':
      ({ index, name, value } = action.payload)
      _state.schedules[index][name] = value
      break

    default:
      break;
  }
  return _state
}

export default TourContext