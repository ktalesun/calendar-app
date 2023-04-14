
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', // autenticaded, not-autenticaded
  user: {},
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = null
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = null
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = payload
    },
    onClean: (state) => {
      state.errorMessage = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClean } = authSlice.actions
