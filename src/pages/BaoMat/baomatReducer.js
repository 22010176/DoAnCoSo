const { createSlice } = require("@reduxjs/toolkit");

const cypherSlice = createSlice({
  name: "mainSlice",
  initialState: {
    cipher: "caesar",
    input: {
      message: '',
      key: '',
      k: 0,
      a: 0,
      b: 0,
      matrix: []
    },
    output: ''
  },
  reducers: {
    changeCypher(state, action) {
      console.log(action)
      state.cipher = action.payload
    },
    enscriptCeasar(state, actions) {

    },

  }
})

export default cypherSlice