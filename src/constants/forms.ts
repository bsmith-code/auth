export const FORM_NAME_EMAIL = 'email' as const
export const FORM_LABEL_EMAIL = 'Email' as const

export const FORM_NAME_PASSWORD = 'password' as const
export const FORM_LABEL_PASSWORD = 'Password' as const

export const FORM_NAME_CONFIRM_PASSWORD = 'confirmPassword' as const
export const FORM_LABEL_CONFIRM_PASSWORD = 'Confirm Password' as const

export const FORM_NAME_FIRST_NAME = 'firstName' as const
export const FORM_LABEL_FIRST_NAME = 'First Name' as const

export const FORM_NAME_LAST_NAME = 'lastName' as const
export const FORM_LABEL_LAST_NAME = 'Last Name' as const

export const FORM_TYPE_TEXT = 'text' as const
export const FORM_TYPE_NUMBER = 'number' as const
export const FORM_TYPE_PASSWORD = 'password' as const

export const FORM_NAME_RECAPTCHA = 'recaptcha' as const

export const FORM_SIGN_IN_FIELDS = [
  {
    label: FORM_LABEL_EMAIL,
    name: FORM_NAME_EMAIL
  },
  {
    label: FORM_LABEL_PASSWORD,
    name: FORM_NAME_PASSWORD,
    type: FORM_TYPE_PASSWORD
  }
]

export const FORM_SIGN_UP_FIELDS = [
  {
    name: FORM_NAME_FIRST_NAME,
    label: FORM_LABEL_FIRST_NAME
  },
  {
    name: FORM_NAME_LAST_NAME,
    label: FORM_LABEL_LAST_NAME
  },
  {
    name: FORM_NAME_EMAIL,
    label: FORM_LABEL_EMAIL
  },
  {
    name: FORM_NAME_PASSWORD,
    label: FORM_LABEL_PASSWORD,
    type: FORM_TYPE_PASSWORD
  },
  {
    name: FORM_NAME_CONFIRM_PASSWORD,
    label: FORM_LABEL_CONFIRM_PASSWORD,
    type: FORM_TYPE_PASSWORD
  }
]
