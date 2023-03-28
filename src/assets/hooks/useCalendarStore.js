/* eslint-disable no-multiple-empty-lines */
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {
  const { events: eventsList, activeEvent } = useSelector(state => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // Llegar al backend

    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      dispatch(onAddNewEvent({
        ...calendarEvent,
        _id: new Date().getTime()
      }))
    }
  }

  const deleteEvent = () => {
    dispatch(onDeleteEvent())
  }

  return {
    //* Properties
    activeEvent,
    eventsList,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    deleteEvent
  }
}
