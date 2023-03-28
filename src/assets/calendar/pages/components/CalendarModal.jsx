
import { Modal } from 'flowbite-react'
import React from 'react'
import { useUiStore } from '../../../hooks'
import { FormEvent } from './'

export const CalendarModal = () => {
  // const [visible, setVisible] = useState(false)
  const { isDateModalOpen, closeDateModal } = useUiStore()

  // const openModal = () => {
  //   setVisible(!visible)
  // }

  return (
    <>
      <Modal
        show={isDateModalOpen}
        onClose={closeDateModal}
      >
        <Modal.Header>
          Nuevo Evento
        </Modal.Header>
        <Modal.Body>
          <FormEvent />
        </Modal.Body>
      </Modal>
    </>
  )
}
