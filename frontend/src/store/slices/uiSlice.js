import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChannelId: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setCurrentChannel(state, { payload }) {
            state.currentChannelId = payload
        }
    }
})

export const { setCurrentChannel } = uiSlice.actions
export const selectCurrentChannelId = (state) => state.ui.currentChannelId
export default uiSlice.reducer