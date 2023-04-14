/* eslint-disable no-multiple-empty-lines */
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store'
import calendarApi from '../api/calendarApi'
import { convertEventsToDateEvents } from '../../helpers'
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
  const { events: eventsList, activeEvent } = useSelector(state => state.calendar)
  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // Llegar al backend
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/event/${calendarEvent.id}`, calendarEvent)
        dispatch(onUpdateEvent({ ...calendarEvent, user }))
        return
      }
      const { data } = await calendarApi.post('/event', calendarEvent)
      dispatch(onAddNewEvent({
        ...calendarEvent,
        id: data.evento.id,
        user
      }))
    } catch (error) {
      Swal.fire('Error al guardar', error.response.data?.msg, 'error')
    }
  }

  const deleteEvent = async () => {
    try {
      await calendarApi.delete(`/event/${activeEvent.id}`)
      dispatch(onDeleteEvent())
    } catch (error) {
      Swal.fire('Error', error.response.data?.msg, 'error')
    }
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/event')
      const events = convertEventsToDateEvents(data.eventos)
      dispatch(onLoadEvents(events))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    //* Properties
    activeEvent,
    eventsList,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    deleteEvent,
    startLoadingEvents
  }
}
