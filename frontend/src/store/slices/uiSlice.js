import { createSlice } from '@reduxjs/toolkit';
import api from '../api/apiSlice';

const initialState = {
  currentChannelId: null,
  modal: {
    modalType: null,
    channelId: null,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel(state, { payload }) {
      state.currentChannelId = payload;
    },
    openModal(state, { payload }) {
      state.modal = payload;
    },
    closeModal(state) {
      state.modal.modalType = null;
      state.modal.channelId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.addChannel.matchFulfilled, (state, { payload }) => {
      state.currentChannelId = payload.id;
    });
    // .addMatcher(api.endpoints.removeChannel.matchFulfilled, (state) => {
    //     state.currentChannelId = null
    // })
  },
});

export const { setCurrentChannel, openModal, closeModal } = uiSlice.actions;
export const selectCurrentChannelId = (state) => state.ui.currentChannelId;
export const selectModal = (state) => state.ui.modal;
export default uiSlice.reducer;
