import { useForm } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import InputTextField from 'components/InputTextField'
import { useCreateUserMutation } from 'store'

const FormSignUp = () => {
  const [createUser, { error, isLoading, isSuccess }] = useCreateUserMutation()

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const handleSubmit = form.handleSubmit(async user => {
    console.log(user)
    await createUser(user)
  })

  return (
    <form
      onSubmit={e => {
        void handleSubmit(e)
      }}
    >
      <Typography variant="subtitle2">Sign up</Typography>
      <InputTextField label="First Name" name="firstName" form={form} />
      <InputTextField label="Last Name" name="lastName" form={form} />
      <InputTextField label="Email" name="email" form={form} />
      <InputTextField
        label="Password"
        name="password"
        type="password"
        form={form}
      />
      <InputTextField
        label="Confirm Password"
        name="confirmPassword"
        form={form}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default FormSignUp
