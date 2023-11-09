export const mockUsers = Array.from({ length: 20 }).map((_, idx) => ({
  uuid: `user-id-${idx}`,
  firstName: `First Name ${idx}`,
  lastName: `Last Name ${idx}`,
  email: `email+${idx}@email.com`,
  permissions: ['perm name 1', 'perm name 2']
}))
