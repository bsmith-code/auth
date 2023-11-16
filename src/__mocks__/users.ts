import { IUser } from 'types'

export const mockUsers: IUser[] = Array.from({ length: 20 }).map((_, idx) => ({
  id: `user-id-${idx}`,
  firstName: `First Name ${idx}`,
  lastName: `Last Name ${idx}`,
  email: `email+${idx}@email.com`,
  permissions: [{ id: 'mock-perm-id', name: 'MOCK_PERM' }]
}))
