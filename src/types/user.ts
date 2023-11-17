import { IPermission } from 'types/permission'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  permissions: IPermission[]
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegister {
  email: string
  password: string
  lastName: string
  recaptcha: string
  firstName: string
  confirmPassword: string
}
