import * as yup from 'yup'

import {
  FORM_NAME_CONFIRM_PASSWORD,
  FORM_NAME_EMAIL,
  FORM_NAME_FIRST_NAME,
  FORM_NAME_LAST_NAME,
  FORM_NAME_PASSWORD,
  FORM_NAME_RECAPTCHA
} from 'constants/forms'

export const EMAIL_REGEX =
  /^[\w!#$%&*+./=?^`{|}~’-]+@[\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*$/

const emailSchema = yup
  .string()
  .required('Email is required.')
  .matches(EMAIL_REGEX, 'Invalid email.')

const passwordSchema = yup.string().required('Password is required.')
export const signInSchema = yup.object({
  [FORM_NAME_EMAIL]: emailSchema,
  [FORM_NAME_PASSWORD]: passwordSchema
})

export const signUpSchema = yup.object({
  [FORM_NAME_FIRST_NAME]: yup.string().required('First name is required.'),
  [FORM_NAME_LAST_NAME]: yup.string().required('Last name is required.'),
  [FORM_NAME_EMAIL]: emailSchema,
  [FORM_NAME_PASSWORD]: passwordSchema,
  [FORM_NAME_CONFIRM_PASSWORD]: yup
    .string()
    .required('Password is required.')
    .oneOf([yup.ref(FORM_NAME_PASSWORD)], 'Passwords must match.'),
  [FORM_NAME_RECAPTCHA]: yup.string().required('Recaptcha is required.')
})
