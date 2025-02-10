const { createSlice } = require("@reduxjs/toolkit");

const cypherSlice = createSlice({
  name: "mainSlice",
  initialState: { cipher: "" },
  reducers: {
    changeCypher(state, action) {
      console.log(action)
      state.cipher = action.payload.cypherName
    }
  }
})

export default cypherSlice