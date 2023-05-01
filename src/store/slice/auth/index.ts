import { createSlice } from "@reduxjs/toolkit";

import { loginUser, registerUser, updateUserInfo } from "../../thunks/auth";

import { IAuthState, IPublicUser } from "../../../common/types/auth";

const initialState: IAuthState = {
  user: {} as IPublicUser,
  isLogged: false,
  isLoading: false,
  status: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLogged = false;
      state.isLoading = true;
    }),
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.isLoading = false;
    }),
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
      state.status = action.payload;
    }),
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.isLogged = false;
    }),
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isLogged = true;
    }),
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.status = action.payload;
    }),
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    })
  }
})

export default authSlice.reducer;