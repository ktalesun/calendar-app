import React from 'react'
import { CalendarComponent, NavbarCallendar } from './components'

export const CalendarPage = () => {
  return (
    <main className='p-4'>
      <NavbarCallendar />
      <CalendarComponent />
    </main>
  )
}
