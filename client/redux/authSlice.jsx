import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "Api";

export const getUserInfo = createAsyncThunk(
  'authentication/getUserInfo',
  async function (params, thunkAPI) {
    const response = await API.get('/account/info')
      .then(response => response.data)

    return response.data
  }
)

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    account: undefined
  },
  extraReducers(builder) {
    builder.addCase(getUserInfo.pending, (state, action) => {
      console.log(action)
      state.account = 'pending...'
    })
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action)
      state.account = action.payload?.[0]
    })
  }
})

export default authSlice

export function getAccount(state) {
  return state.auth.account
}

