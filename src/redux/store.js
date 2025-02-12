import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../pages/Counter/counterReducer";
import cypherSlice from "../pages/BaoMat/baomatReducer";
import copySlice from "../pages/reducers/copyReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cypher: cypherSlice.reducer,
    copy: copySlice.reducer
  }
})

export default store;