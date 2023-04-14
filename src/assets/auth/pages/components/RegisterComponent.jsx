import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useAuthStore, useForm } from '../../../hooks'

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPasswordConfirm: ''
}

export const RegisterComponent = () => {
  const { registerName, registerEmail, registerPassword, registerPasswordConfirm, onInputChange, onResetForm } = useForm(registerFormFields)
  const { startRegister } = useAuthStore()
  const [errorMail, setErrorMail] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (registerPassword !== registerPasswordConfirm) {
      setErrorMail(true)
      return
    }
    startRegister({ name: registerName, email: registerEmail, password: registerPassword })
    // Swal.fire('Registro exitoso', 'EL registro se ha compleado correctamente', 'success')
    onResetForm()
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
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
          name='registerName'
          value={registerName}
          onChange={onInputChange}
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
          name='registerEmail'
          value={registerEmail}
          onChange={onInputChange}
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
          name='registerPassword'
          value={registerPassword}
          onChange={onInputChange}
          color={(errorMail) ? 'failure' : ''}
          helperText={(errorMail) ? 'El password no coincide' : ''}
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
          name='registerPasswordConfirm'
          value={registerPasswordConfirm}
          onChange={onInputChange}
          color={(errorMail) ? 'failure' : ''}
          helperText={(errorMail) ? 'El password no coincide' : ''}
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
