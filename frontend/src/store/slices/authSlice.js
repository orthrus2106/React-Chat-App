import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token')
const initialState = {
    token: token || null,
    isAuthed: Boolean(token)
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload
            state.isAuthed = true
        },
        logOut: (state) => {
            state.token = null
            state.isAuthed = false
        }
    }
})

export const { logIn, logOut } = authSlice.actions
export const selectIsAuthed = (state) => state.auth.isAuthed
export const selectToken = (state) => state.auth.token
export default authSlice.reducer
