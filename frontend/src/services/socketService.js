import { io } from 'socket.io-client'
import api from '../store/api/apiSlice'

const socketInit = (store) => {
    const socket = io()

    socket.on('newMessage', (payload) => {
        store.dispatch(api.util.updateQueryData('getMessages', undefined, (newMessages) => {
            newMessages.push(payload)
        }))
    })
}

export default socketInit