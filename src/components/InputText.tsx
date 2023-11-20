import {
  FieldValues,
  Path,
  useController,
  UseFormReturn
} from 'react-hook-form'

import TextField from '@mui/material/TextField'

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

// RADIO

// interface IProps<T extends FieldValues> {
//   name: Path<T>
//   label: string
//   control: Control<T>
// }
// export const InputRadioBase = <T extends FieldValues>({
//   name,
//   label,
//   control
// }: IProps<T>) => {
//   const { field } = useController({ name, control })

//   return (
//     <FormControl>
//       <FormLabel>{label}</FormLabel>
//       <RadioGroup {...field}>
//         <FormControlLabel
//           value="option1"
//           control={<Radio />}
//           label="Option 1"
//         />
//         <FormControlLabel
//           value="option2"
//           control={<Radio />}
//           label="Option 2"
//         />
//         <FormControlLabel
//           value="option3"
//           control={<Radio />}
//           label="Option 3"
//         />
//       </RadioGroup>
//     </FormControl>
//   )
// }

// CHECKBOX

// interface IProps<T extends FieldValues> {
//   name: Path<T>
//   label: string
//   control: Control<T>
// }

// export const InputCheckboxBase = <T extends FieldValues>({
//   name,
//   label,
//   control
// }: IProps<T>) => {
//   const {
//     field,
//     fieldState: { error }
//   } = useController({ name, control })

//   return <FormControlLabel {...field} label={label} control={<Checkbox />} />
// }
