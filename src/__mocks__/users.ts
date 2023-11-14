import { IUser } from 'types'

export const mockUsers: IUser[] = Array.from({ length: 20 }).map((_, idx) => ({
  uuid: `user-id-${idx}`,
  firstName: `First Name ${idx}`,
  lastName: `Last Name ${idx}`,
  email: `email+${idx}@email.com`,
  permissions: ['test', 'test2', 'test3']
}))
