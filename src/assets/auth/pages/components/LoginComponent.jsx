import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

export const LoginComponent = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='email1'
            value='Your email'
          />
        </div>
        <TextInput
          id='email1'
          type='email'
          placeholder='user@mail.com'
          required
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='password1'
            value='Your password'
          />
        </div>
        <TextInput
          id='password1'
          type='password'
          required
        />
      </div>
      <Button type='submit'>
        Login
      </Button>
    </form>
  )
}
