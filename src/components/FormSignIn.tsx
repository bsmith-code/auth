import { useForm } from 'react-hook-form'
import { Typography } from '@mui/material'
import InputTextField from 'components/InputTextField'

const FormSignIn = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  return (
    <form>
      <Typography variant="subtitle2">Sign in</Typography>
      <InputTextField label="Email" name="email" form={form} />
      <InputTextField label="Password" name="password" form={form} />
    </form>
  )
}

export default FormSignIn
