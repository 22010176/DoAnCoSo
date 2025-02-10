import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../pages/Counter/ui/counterReducer";
import cypherSlice from "../pages/BaoMat/baomatReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cypher: cypherSlice.reducer
  }
})

export default store;