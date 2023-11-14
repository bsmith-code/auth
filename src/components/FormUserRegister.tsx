// Common
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Store
import { useRegisterMutation } from 'store/server'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Components
import InputText from 'components/InputText'
import InputReCaptcha from 'components/InputRecaptcha'

// Utils
import { signUpSchema } from 'utils'

// Constants
import {
  FORM_NAME_EMAIL,
  FORM_NAME_PASSWORD,
  FORM_NAME_LAST_NAME,
  FORM_SIGN_UP_FIELDS,
  FORM_NAME_RECAPTCHA,
  FORM_NAME_FIRST_NAME,
  FORM_NAME_CONFIRM_PASSWORD
} from 'constants/forms'

// Types
import { IUserRegister } from 'types'

interface IProps {
  onToggleForm: () => void
}
const FormUserRegister = ({ onToggleForm }: IProps) => {
  const [createUser, { isLoading, isSuccess }] = useRegisterMutation()

  const form = useForm<IUserRegister>({
    defaultValues: {
      [FORM_NAME_EMAIL]: '',
      [FORM_NAME_PASSWORD]: '',
      [FORM_NAME_RECAPTCHA]: '',
      [FORM_NAME_LAST_NAME]: '',
      [FORM_NAME_FIRST_NAME]: '',
      [FORM_NAME_CONFIRM_PASSWORD]: ''
    },
    resolver: yupResolver(signUpSchema)
  })

  const handleSubmit = form.handleSubmit(async user => {
    await createUser(user)
  })

  useEffect(() => {
    if (isSuccess) {
      onToggleForm()
    }
  }, [isSuccess])

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
        <Box mb={2} key={`field-${field.name}`}>
          <InputText {...field} form={form} />
        </Box>
      ))}
      <Box mb={3}>
        <InputReCaptcha form={form} />
      </Box>

      <Button
        type="submit"
        disableElevation
        variant="contained"
        disabled={isLoading}
        sx={{ color: 'white', float: 'right' }}
      >
        Sign up
      </Button>
    </form>
  )
}

export default FormUserRegister
