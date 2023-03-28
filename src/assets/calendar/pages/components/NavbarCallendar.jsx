import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
// import { ToogleLanguajeButton } from '../../../ui'

export const NavbarCallendar = () => {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href='https://flowbite.com/'>
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Kevin León Hernández
        </span>
      </Navbar.Brand>
      {/* <ToogleLanguajeButton /> */}
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt='User settings' img='https://i.pravatar.cc/36' rounded />}
        >
          <Dropdown.Header>
            <span className='block text-sm'>
              Bonnie Green
            </span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  )
}
