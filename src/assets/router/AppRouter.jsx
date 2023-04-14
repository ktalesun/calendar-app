import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginRegisterPage } from '../auth'
import { CalendarPage } from '../calendar'
import { useAuthStore } from '../hooks'
import { LoaderComponent } from '../ui'

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthStore()
  // const authStatus = 'checking'

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      <LoaderComponent />
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path='auth/*' element={<LoginRegisterPage />} />
              <Route path='/*' element={<Navigate to='auth/login' />} />
            </>
            )
          : (
            <>
              <Route path='/' element={<CalendarPage />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
            )
        }

    </Routes>
  )
}
