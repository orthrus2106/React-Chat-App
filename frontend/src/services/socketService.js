import { io } from 'socket.io-client'
import api from '../store/api/apiSlice'
import { setCurrentChannel } from '../store/slices/uiSlice'

const socketInit = (store) => {
    const socket = io()

    socket.on('newMessage', (payload) => {
        store.dispatch(api.util.updateQueryData('getMessages', undefined, (newMessages) => {
            newMessages.push(payload)
        }))
    })

    socket.on('newChannel', (payload) => {
        store.dispatch(api.util.updateQueryData('getChannels', undefined, (newChannels) => {
            newChannels.push(payload)
        }))
    });
    socket.on('removeChannel', (payload) => {
        store.dispatch(api.util.updateQueryData('getChannels', undefined, (newChannels) => {
            const filteredChannels = newChannels.filter((channel) => channel.id !== payload.id)
            const state = store.getState()
            console.log(state)
            if (state.ui.currentChannelId === payload.id) {
                store.dispatch(setCurrentChannel(null))
            }
            return filteredChannels
        }))
    });
}

export default socketInit