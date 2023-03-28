import { Calendar } from 'react-big-calendar'
// import { addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessages } from '../../../../helpers'
import { CalendarEvent, CalendarModal } from './'
import { useState } from 'react'
import { useCalendarStore, useUiStore } from '../../../hooks'
import { FabAddNew, FabDeleteEvent } from '../../../ui'

// const myEventsList = [{
//   title: 'Cumpleaños del Jefe',
//   notes: 'Hay que comprar el pastel',
//   start: new Date(),
//   end: addHours(new Date(), 1),
//   bgColor: '#fafafa',
//   user: {
//     _id: '123',
//     name: 'Kevin'
//   }

// }]

export const CalendarComponent = () => {
  // eslint-disable-next-line no-undef
  const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month')
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const { openDateModal } = useUiStore()
  const { eventsList, setActiveEvent } = useCalendarStore()

  const onSelect = (event) => {
    setActiveEvent(event)
  }

  const onDoubleClick = (event) => {
    // console.log({ onDoubleClick: event })
    openDateModal()
  }

  const viewChanged = (event) => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('lastview', event)
    setLastView(event)
  }
  return (
    <>
      <Calendar
        culture='es'
        localizer={localizer}
        events={eventsList}
        startAccessor='start'
        endAccessor='end'
        defaultView={lastView}
        style={{ height: 'calc(100vh - 60px)' }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={viewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDeleteEvent />
    </>
  )
}
