import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

export const RegisterComponent = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='name'
            value='Your name'
          />
        </div>
        <TextInput
          id='name1'
          type='text'
          placeholder='Fulanito de tal'
          required
          shadow
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='email2'
            value='Your email'
          />
        </div>
        <TextInput
          id='email2'
          type='email'
          placeholder='name@flowbite.com'
          required
          shadow
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='password2'
            value='Your password'
          />
        </div>
        <TextInput
          id='password2'
          type='password'
          required
          shadow
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='repeat-password'
            value='Repeat password'
          />
        </div>
        <TextInput
          id='repeat-password'
          type='password'
          required
          shadow
        />
      </div>
      <Button type='submit'>
        Register new account
      </Button>
    </form>
  )
}
