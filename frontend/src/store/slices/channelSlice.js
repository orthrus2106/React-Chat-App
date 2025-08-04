// eslint-disable-next-line no-param-reassign

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState({
  currentId: null,
});

const channelSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: channelsAdapter.addOne,
    removeChannel: channelsAdapter.removeOne,
    setChannels: (state, { payload }) => {
      channelsAdapter.setAll(state, payload);
      state.currentId = payload[0]?.id ?? null;
    },
    setCurrentChannel: (state, { payload }) => {
      state.currentId = payload;
    },
  },
});

export const {
  addChannel, removeChannel, setChannels, setCurrentChannel,
} = channelSlice.actions;
export const channelSelectors = channelsAdapter.getSelectors((state) => state.channels);
export const selectCurrentChannelId = (state) => state.channels.currentId;
export default channelSlice.reducer;
