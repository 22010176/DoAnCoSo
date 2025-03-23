import { createContext } from "react";
import Randomstring from "randomstring";

import { randInt } from "@/utils/random";

const TourContext = createContext()

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

export function GenerateTour() {
  return {
    "images": new Array(randInt(5, 2)).fill().map(i => "\\storage\\1742224751940_2ac68eb5-9503-41d8-b185-1c4a2481994a.png"),
    "schedules": new Array(randInt(10, 1)).fill().map((i, j) => ({
      "index": j,
      "title": Randomstring.generate(50),
      "content": Randomstring.generate(1000)
    })),
    "info": {
      "tenTour": Randomstring.generate({ length: 20 }),
      "xuatPhat": Randomstring.generate({ length: 20 }),
      "diemDen": Randomstring.generate({ length: 20 }),
      "phuongTien": randInt(5, 1),
      "giaNguoiLon": randInt(),
      "giaTreEm": randInt(),
      "giaEmBe": randInt(),
      "moTa": Randomstring.generate({ length: 1000 })
    }
  }
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
        index: _state.schedules?.length + 1,
        title: "",
        content: ""
      }
      _state.schedules = [..._state.schedules, newSchedule]
      break

    case 'scheduleUpdate':
      ({ index, name, value } = action.payload)
      _state.schedules[index - 1][name] = value
      break

    case 'genRandom':
      return {
        "images": new Array(randInt(5, 2)).fill().map(i => "\\storage\\1742224751940_2ac68eb5-9503-41d8-b185-1c4a2481994a.png"),
        "schedules": new Array(randInt(10, 2)).fill().map((i, j) => ({
          "index": j + 1,
          "title": Randomstring.generate(50),
          "content": Randomstring.generate(100)
        })),
        "info": {
          "tenTour": Randomstring.generate({ length: 20 }),
          "xuatPhat": Randomstring.generate({ length: 20 }),
          "diemDen": Randomstring.generate({ length: 20 }),
          "phuongTien": randInt(5, 1),
          "giaNguoiLon": randInt(),
          "giaTreEm": randInt(),
          "giaEmBe": randInt(),
          "moTa": Randomstring.generate({ length: 1000 })
        }
      }

    case 'clearInput':
      return JSON.parse(JSON.stringify(initialState))

    default:
      break;
  }
  return _state
}

export default TourContext