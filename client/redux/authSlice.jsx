import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/Api";

export const getUserInfo = createAsyncThunk(
  'authentication/getUserInfo',
  async function (params, thunkAPI) {
    const response = await API.get('/account/info')
      .then(response => response.data)

    return response.data
  }
)

export const logInUser = createAsyncThunk(
  'authentication/login',
  async function ({ email, matKhau }, thunkAPI) {
    const temp = await API.post('/account/login', { email, matKhau })
      .then(function (response) { return response.data })
    if (!temp.success) return

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
      state.account = 'pending...'
    })
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.account = action.payload?.[0]
    })

    builder.addCase(logInUser.pending, (state, action) => {
      state.account = 'pending...'
    })
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.account = action.payload?.[0]
    })
  }
})

export default authSlice

export function getAccount(state) {
  return state.auth.account
}

