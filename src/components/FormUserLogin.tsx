import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useLoginMutation } from 'store/server'

import { Box, Button, Typography } from '@mui/material'

import InputText from 'components/InputText'

import { signInSchema } from 'utils'

import {
  FORM_NAME_EMAIL,
  FORM_NAME_PASSWORD,
  FORM_SIGN_IN_FIELDS
} from 'constants/forms'

const FormUserLogin = () => {
  const [login, { error, isLoading, isSuccess }] = useLoginMutation()

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      [FORM_NAME_EMAIL]: '',
      [FORM_NAME_PASSWORD]: ''
    },
    resolver: yupResolver(signInSchema)
  })

  const handleSubmit = form.handleSubmit(async user => {
    await login(user)
  })

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={3}>
        <Typography variant="h5">Sign in</Typography>
      </Box>

      {FORM_SIGN_IN_FIELDS.map(field => (
        <Box mb={2} key={`field-${field.name}`}>
          <InputText {...field} form={form} />
        </Box>
      ))}

      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{ color: 'white', float: 'right' }}
      >
        Sign in
      </Button>
    </form>
  )
}

export default FormUserLogin
