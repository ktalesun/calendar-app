/* eslint-disable no-undef */
import { useDispatch, useSelector } from 'react-redux'
import calendarApi from '../api/calendarApi'
import { onChecking, onClean, onLogin, onLogout, onLogoutCalendar } from '../store'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth/', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-time', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(onClean())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth/new', { name, email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-time', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg))
      setTimeout(() => {
        dispatch(onClean())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token) return dispatch(onLogout())

    try {
      const { data } = await calendarApi.get('/auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-time', new Date().getDate())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogoutCalendar())
    dispatch(onLogout())
  }

  return {
    // * Properties
    status,
    user,
    errorMessage,

    // * Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
