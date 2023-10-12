import { useForm } from 'react-hook-form'
import { Typography } from '@mui/material'
import InputTextField from 'components/InputTextField'

const FormSignUp = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  return (
    <form>
      <Typography variant="subtitle2">Sign up</Typography>
      <InputTextField label="Email" name="email" form={form} />
      <InputTextField label="Password" name="password" form={form} />
    </form>
  )
}

export default FormSignUp
