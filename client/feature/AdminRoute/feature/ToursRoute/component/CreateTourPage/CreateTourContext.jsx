import { createContext } from "react";

const TourContext = createContext()

export const initialState = {
  images: [],
  schedules: []
}

export function reducer(state, action) {
  const _state = { ...state }

  switch (action.type) {
    case "updateInput":
      const { name, value } = action.payload
      _state[name] = value
      break

    case 'updateImage':
      const { fileList } = action.payload
      _state.images = fileList
      break

    default:
      break;
  }
  return _state
}

export default TourContext