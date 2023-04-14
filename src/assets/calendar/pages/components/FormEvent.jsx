/* eslint-disable no-trailing-spaces */
import { addHours, differenceInSeconds } from 'date-fns'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Button, Label, Textarea, TextInput } from 'flowbite-react'
import { DropdownDivider } from 'flowbite-react/lib/esm/components/Dropdown/DropdownDivider'
import React, { useState, useMemo, useEffect } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import { es } from 'date-fns/locale'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useCalendarStore, useUiStore } from '../../../hooks'

registerLocale('es', es)

export const FormEvent = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2)
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { activeEvent, startSavingEvent } = useCalendarStore()
  const { closeDateModal } = useUiStore()

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const errorTitle = useMemo(() => {
    return (formValues.title.length > 0) ? '' : 'failure'
  }, [formValues.title, formSubmitted])

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent })
    }
  }, [activeEvent])
  
  const onSubmit = async (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    const difference = differenceInSeconds(formValues.end, formValues.start)
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Error', 'Fechas incorrectas', 'error')
      return
    }

    if (formValues.title.length <= 0) {
      return
    }

    await startSavingEvent(formValues)
    closeDateModal()
    setFormSubmitted(false)
  }
  
  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='date1'
            value='Fecha inicio'
          />
        </div>
        <DatePicker
          className='w-full rounded-md border bg-gray-50 border-gray-300'
          id='date1'
          name='start'
          selected={formValues.start}
          onChange={event => onDateChanged(event, 'start')}
          dateFormat='Pp'
          showTimeSelect
          timeCaption='Hora'
          locale='es'
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='date2'
            value='Fecha final'
          />
        </div>
        <DatePicker
          className='w-full rounded-md border bg-gray-50 border-gray-300'
          id='date2'
          name='end'
          minDate={formValues.start}
          selected={formValues.end}
          onChange={event => onDateChanged(event, 'end')}
          dateFormat='Pp'
          showTimeSelect
          locale='es'
          timeCaption='Hora'
        />
      </div>
      <DropdownDivider />
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='titulo'
            value='Titulo y notas'
          />
        </div>
        <TextInput
          id='titulo'
          type='text'
          name='title'
          color={errorTitle}
          value={formValues.title}
          onChange={onInputChanged}
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='textarea'
            value='Notes'
          />
        </div>
        <Textarea
          id='textarea'
          name='notes'
          placeholder='Notas'
          value={formValues.notes}
          onChange={onInputChanged}
          style={{ resize: 'none' }}
        />
      </div>
      <Button type='submit'>
        Guardar
      </Button>
    </form>
  )
}
