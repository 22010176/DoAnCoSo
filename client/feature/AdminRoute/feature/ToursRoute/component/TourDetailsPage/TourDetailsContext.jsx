import { createContext } from "react";

const TourDetailsContext = createContext()

export const initialState = {
  images: [],
  schedules: [],
  info: {
    tenTour: null,
    xuatPhat: null,
    diemDen: null,
    phuongTien: null,
    giaNguoiLon: null,
    giaTreEm: null,
    giaEmBe: null,
    moTa: null,
  }
}

export function reducer(state, action) {
  const _state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case "setValue":
      return JSON.parse(JSON.stringify(action.payload))

    default:
      break;
  }

  return _state
}

export default TourDetailsContext