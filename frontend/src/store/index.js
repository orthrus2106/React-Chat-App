import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import channelReducer from './slices/channelSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        channels: channelReducer,
    }
})