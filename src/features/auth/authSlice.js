import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null ,userInfo: null},
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken ,userInfo} = action.payload
            state.token = accessToken
            state.userInfo = userInfo
        },
        logOut: (state, action) => {
            state.token = null
            state.userInfo = null

        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUser = (state) => state.auth.userInfo