// Common
import { useForm } from 'react-hook-form'

// Store
import { useLoginMutation } from 'store'

// MUI
import { Button, Typography } from '@mui/material'

// Components
import InputTextField from 'components/InputTextField'

const FormSignIn = () => {
  const [login, { error, isLoading, isSuccess }] = useLoginMutation()

  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = form.handleSubmit(async user => {
    await login(user)
  })

  return (
    <form
      onSubmit={e => {
        void handleSubmit(e)
      }}
    >
      <Typography variant="subtitle2">Sign in</Typography>
      <InputTextField label="Email" name="email" form={form} />
      <InputTextField
        label="Password"
        name="password"
        type="password"
        form={form}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default FormSignIn
