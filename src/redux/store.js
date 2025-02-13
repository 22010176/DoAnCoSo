import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../pages/Counter/counterReducer";
import cypherSlice from "../pages/BaoMat/baomatReducer";
import copySlice from "../pages/reducers/copyReducer";
import noteSlice from "../pages/BaoMat/components/NoteValue/noteReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cypher: cypherSlice.reducer,
    copy: copySlice.reducer,
    note: noteSlice.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger)
  }
})

export default store;