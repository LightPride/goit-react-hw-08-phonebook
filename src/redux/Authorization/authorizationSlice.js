import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshCurrentUser } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
