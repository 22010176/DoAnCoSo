const { createContext } = require("react");

const TourInfoContext = createContext()

export const initialState = {
  tourInfo: {},
  tourImages: [],
  tourSchedules: [],
}

export function reducer(state, action) {

}

export default TourInfoContext