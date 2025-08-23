import { createSlice } from '@reduxjs/toolkit'
import api from '../api/apiSlice'

const initialState = {
  currentChannelId: null,
  isAuthFailed: false,
  currentLanguage: 'en',
  isCanvasOpened: false,
  modal: {
    modalType: null,
    channelId: null,
  },
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel(state, { payload }) {
      state.currentChannelId = payload
    },
    openModal(state, { payload }) {
      state.modal = payload
    },
    closeModal(state) {
      state.modal.modalType = null
      state.modal.channelId = null
    },
    setAuthFailed(state, { payload }) {
      state.isAuthFailed = payload
    },
    setLanguage(state, { payload }) {
      state.currentLanguage = payload
    },
    setCanvas(state, { payload }) {
      state.isCanvasOpened = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.addChannel.matchFulfilled, (state, { payload }) => {
      state.currentChannelId = payload.id
    })
    // .addMatcher(api.endpoints.removeChannel.matchFulfilled, (state) => {
    //     state.currentChannelId = null
    // })
  },
})

export const { setCurrentChannel, openModal, closeModal, setAuthFailed, setLanguage, setCanvas } = uiSlice.actions
export const selectCurrentChannelId = state => state.ui.currentChannelId
export const selectModal = state => state.ui.modal
export const selectAuthFailed = state => state.ui.isAuthFailed
export const selectCurrentLanguage = state => state.ui.currentLanguage
export const selectCanvasOpened = state => state.ui.isCanvasOpened
export default uiSlice.reducer
