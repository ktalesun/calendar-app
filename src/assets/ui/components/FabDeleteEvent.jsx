// icon:delete-forever-outline | Material Design Icons https://materialdesignicons.com/ | Austin Andrews

import { useCalendarStore } from '../../hooks'

export const FabDeleteEvent = () => {
  const { deleteEvent, activeEvent } = useCalendarStore()
  const handleDelete = () => {
    deleteEvent()
  }
  return (
    <button
      style={{ display: (activeEvent) ? 'flex' : 'none' }}
      onClick={handleDelete}
      className='place-content-center place-items-center rounded-full w-16 h-16 bg-red-500 fixed left-8 bottom-9 text-white text-3xl font-bold'
    >
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        height='42px'
        width='42px'
      >
        <path d='M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12-1.41-1.41M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9z' />
      </svg>
    </button>

  )
}
