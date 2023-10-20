import { TextField } from '@mui/material'
import {
  Path,
  FieldValues,
  UseFormReturn,
  useController
} from 'react-hook-form'

interface IProps<T extends FieldValues> {
  label?: string
  name: Path<T>
  type?: 'text' | 'password' | 'number'
  form: UseFormReturn<T>
}

const InputText = <T extends FieldValues>({
  form,
  name,
  type = 'text',
  label = ''
}: IProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name, control: form.control })

  const { value, onChange: handleChange } = field

  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      value={value}
      error={!!error}
      variant="outlined"
      onChange={handleChange}
      helperText={error?.message}
    />
  )
}

export default InputText
