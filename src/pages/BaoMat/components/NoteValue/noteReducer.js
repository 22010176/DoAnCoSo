import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: { value: 'test' },
  reducers: {
    note(state, action) {
      state.value = action.payload
    }
  }
})

export default noteSlice