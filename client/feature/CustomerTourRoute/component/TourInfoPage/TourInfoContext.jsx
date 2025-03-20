const { createContext } = require("react");

const TourInfoContext = createContext()

export const initialState = {
  info: {},
  images: [],
  schedules: [],
}

export function reducer(state, action) {
  const _state = JSON.parse(JSON.stringify(state))
  const { type, payload } = action

  // console.log(action)
  switch (type) {
    case 'init':
      _state.info = payload.info
      _state.images = payload.images
      _state.schedules = payload.schedules
      break
    default:
  }

  return _state
}

export default TourInfoContext