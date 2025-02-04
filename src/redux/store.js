import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../pages/Counter/ui/counterReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export default store;