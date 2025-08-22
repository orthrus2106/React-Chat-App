import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// import channelReducer from './slices/channelSlice';
// import messageReducer from './slices/messagesSlice'
import api from './api/apiSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
