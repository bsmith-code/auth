// Common
import ReCAPTCHA from 'react-google-recaptcha'
import { useController, UseFormReturn } from 'react-hook-form'

// MUI
import { FormHelperText } from '@mui/material'

// Constants
import { FORM_NAME_RECAPTCHA } from 'constants/index'

// TYpes
import { IFormSignUp } from 'types'

interface IProps {
  form: UseFormReturn<IFormSignUp>
}

const InputReCaptcha = ({ form }: IProps) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: FORM_NAME_RECAPTCHA, control: form.control })

  const handleReCaptchaChange = (token: string | null) => {
    field.onChange(token)
  }
  const handleReCaptchaExpired = () => {
    form.setValue(FORM_NAME_RECAPTCHA, '')
  }

  return (
    <>
      <ReCAPTCHA
        onChange={handleReCaptchaChange}
        onExpired={handleReCaptchaExpired}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY ?? ''}
      />
      {!!error && <FormHelperText error>{error.message}</FormHelperText>}
    </>
  )
}

export default InputReCaptcha
