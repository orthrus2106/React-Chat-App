import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// import channelReducer from './slices/channelSlice';
// import messageReducer from './slices/messagesSlice'
import api from './api/apiSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
