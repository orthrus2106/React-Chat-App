import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChannelId: null,
    modal: {
        modalType: null,
        channelId: null,
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setCurrentChannel(state, { payload }) {
            state.currentChannelId = payload
        },
        openModal(state, {payload}) {
            state.modal = payload
        },
        closeModal(state) {
            state.modal.modalType = null
            state.modal.channelId = null
        }
    }
})

export const { setCurrentChannel, openModal, closeModal } = uiSlice.actions
export const selectCurrentChannelId = (state) => state.ui.currentChannelId
export default uiSlice.reducer