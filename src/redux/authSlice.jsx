import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../Api";

export const getUserInfo = createAsyncThunk(
  'authentication/getUserInfo',
  async function (params, thunkAPI) {
    const response = await API.get('/account/info').then(response => response.data)
    console.log(response)
    return response
  }
)

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    account: undefined
  },
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action)
    })
  }
})

export default authSlice