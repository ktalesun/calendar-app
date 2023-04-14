
import { Tabs } from 'flowbite-react'
import React, { useEffect } from 'react'
import { LoginComponent } from './components/LoginComponent'
import { RegisterComponent } from './components/RegisterComponent'
import { useAuthStore } from '../../hooks'
import Swal from 'sweetalert2'

export const LoginRegisterPage = () => {
  const { errorMessage } = useAuthStore()

  useEffect(() => {
    if (errorMessage !== null && errorMessage) {
      Swal.fire('Ups! algo pasó', errorMessage, 'error')
    }
  }, [errorMessage])

  return (
    <section className='flex place-content-center place-items-center h-screen'>
      <article className='min-w-[1024px] min-h-[640px]'>
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          className='place-content-center'
        >
          {/* Add Icons */}
          <Tabs.Item active title='Login'>
            <LoginComponent />
          </Tabs.Item>

          <Tabs.Item title='Register'>
            <RegisterComponent />
          </Tabs.Item>
        </Tabs.Group>
      </article>

    </section>
  )
}
