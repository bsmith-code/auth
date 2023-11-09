export interface IUserRole {
  uuid: string
  permissions: string[]
}
export interface IUser {
  uuid: string
  firstName: string
  lastName: string
  email: string
  roles: IUserRole[]
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
