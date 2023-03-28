import { addHours } from 'date-fns'
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabAddNew = () => {
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClick = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Kevin'
      }
    })
    openDateModal()
  }

  return (
    <button
      onClick={handleClick}
      className='rounded-full w-16 h-16 bg-sky-500 fixed right-8 bottom-9 text-white text-3xl font-bold'
    >
      +
    </button>
  )
}
