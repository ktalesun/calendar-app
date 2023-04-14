import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { useAuthStore, useForm } from '../../../hooks'

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginComponent = () => {
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields)

  const { startLogin } = useAuthStore()

  const onSubmit = (event) => {
    event.preventDefault()
    startLogin({ email: loginEmail, password: loginPassword })
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
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
          name='loginEmail'
          value={loginEmail}
          onChange={onInputChange}
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
          name='loginPassword'
          value={loginPassword}
          onChange={onInputChange}
          required
        />
      </div>
      <Button type='submit'>
        Login
      </Button>
    </form>
  )
}
