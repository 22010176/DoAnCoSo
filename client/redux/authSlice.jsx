import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API, { GoogleAuth, LocalAuth } from "@/Api";

export const getUserInfo = createAsyncThunk(
  'authentication/getUserInfo',
  async function (params, thunkAPI) {
    const response = await LocalAuth.get('/info')
      .then(response => response.data)

    return response.data
  }
)

export const logInUser = createAsyncThunk(
  'authentication/login',
  async function ({ email, password }, thunkAPI) {
    const temp = await LocalAuth.post('/login', { email, password })
      .then(function (response) { return response.data })

    if (!temp.success) return

    const response = await LocalAuth.get('/info')
      .then(response => response.data)

    return response
  }
)

export const getGoogleUserInfo = createAsyncThunk(
  'authentication/getGoogleUserInfo',
  async function (params, thunkAPI) {
    const response = await GoogleAuth.get('/profile')
      .then(res => res.data)
    const { profile } = response
    const result = {
      created_at: null,
      email: profile.emails[0].value,
      hinhAnh: profile.photos[0].value,
      ho: profile.name.familyName,
      ten: profile.name.givenName,
      id: profile.id,
      maVaiTro: "guess",
      soDienThoai: "",
      tenVaiTro: "Khách hàng",
      vaiTro: "2",
    }
    return result
  }
)

export const logOutUser = createAsyncThunk(
  'authentication/logout',
  async function (params, thunkAPI) {
    const result = await LocalAuth.post('/logout')
      .then(function (response) {
        return response.data
      })
    console.log(result)
    return result
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

    builder.addCase(getGoogleUserInfo.pending, (state, action) => {
      state.account = 'pending...'
    })
    builder.addCase(getGoogleUserInfo.fulfilled, (state, action) => {
      console.log(action)
      state.account = action.payload
    })

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.account = null
    })
  }
})

export default authSlice

export function getAccount(state) {
  return state.auth.account
}

