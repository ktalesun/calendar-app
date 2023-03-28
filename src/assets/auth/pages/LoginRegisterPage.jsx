
import { Tabs } from 'flowbite-react'
import React from 'react'
import { LoginComponent } from './components/LoginComponent'
import { RegisterComponent } from './components/RegisterComponent'

export const LoginRegisterPage = () => {
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
