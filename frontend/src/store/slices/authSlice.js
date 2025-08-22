import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

const initialState = {
  token: token || null,
  username: username || null,
  isAuthed: Boolean(token),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isAuthed = true;
    },
    logOut: (state) => {
      state.token = null;
      state.username = null;
      state.isAuthed = false;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export const selectIsAuthed = (state) => state.auth.isAuthed;
export const selectToken = (state) => state.auth.token;
export const selectUsername = (state) => state.auth.username;
export default authSlice.reducer;
