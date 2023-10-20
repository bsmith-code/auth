// Common
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Store
import { useLoginMutation } from 'store/server'

// MUI
import { Box, Button, Typography } from '@mui/material'

// Components
import InputText from 'components/InputText'

// Utils
import { signInSchema } from 'utils'

// Constants
import {
  FORM_NAME_EMAIL,
  FORM_NAME_PASSWORD,
  FORM_SIGN_IN_FIELDS
} from 'constants/index'

const FormSignIn = () => {
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
    <form
      onSubmit={e => {
        void handleSubmit(e)
      }}
    >
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

export default FormSignIn
