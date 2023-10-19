// Common
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Store
import { useCreateUserMutation } from 'store'

// MUI
import { Box, Button, Typography } from '@mui/material'

// Components
import InputTextField from 'components/InputTextField'

// Utils
import { signUpSchema } from 'utils'

// Constants
import {
  FORM_NAME_EMAIL,
  FORM_NAME_PASSWORD,
  FORM_NAME_LAST_NAME,
  FORM_SIGN_UP_FIELDS,
  FORM_NAME_FIRST_NAME,
  FORM_NAME_CONFIRM_PASSWORD
} from 'constants/index'

const FormSignUp = () => {
  const [createUser, { error, isLoading, isSuccess }] = useCreateUserMutation()

  const form = useForm({
    defaultValues: {
      [FORM_NAME_FIRST_NAME]: '',
      [FORM_NAME_LAST_NAME]: '',
      [FORM_NAME_EMAIL]: '',
      [FORM_NAME_PASSWORD]: '',
      [FORM_NAME_CONFIRM_PASSWORD]: ''
    },
    resolver: yupResolver(signUpSchema)
  })

  const handleSubmit = form.handleSubmit(async user => {
    await createUser(user)
  })

  return (
    <form
      onSubmit={e => {
        void handleSubmit(e)
      }}
    >
      <Box mb={3}>
        <Typography variant="h5">Sign up</Typography>
      </Box>

      {FORM_SIGN_UP_FIELDS.map(field => (
        <Box mb={2} width="400px">
          <InputTextField key={`field-${field.name}`} {...field} form={form} />
        </Box>
      ))}

      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{ color: 'white', float: 'right' }}
      >
        Sign up
      </Button>
    </form>
  )
}

export default FormSignUp