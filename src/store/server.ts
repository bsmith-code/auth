// Common
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Types
import { IUser } from 'types'

const authApi = createApi({
  reducerPath: 'contact',
  tagTypes: ['IUser'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL ?? ''}/v1/auth`,
    credentials: 'include'
  }),
  endpoints: build => ({
    authenticateUser: build.mutation<IUser, Pick<IUser, 'email' | 'password'>>({
      query: body => ({
        url: 'authenticateUser',
        method: 'POST',
        body
      })
    }),
    registerUser: build.mutation<
      IUser,
      Omit<IUser, 'uuid' | 'createdAt' | 'updatedAt'>
    >({
      query: body => ({
        url: 'registerUser',
        method: 'POST',
        body
      })
    }),
    verifyUser: build.query<IUser, void>({
      query: () => 'verifyUser'
    }),
    verifyEmail: build.query<void, string>({
      query: id => `verifyEmail/${id}`
    })
  })
})

export const {
  reducer: authReducer,
  middleware: authMiddleware,
  reducerPath: authReducerPath,

  useVerifyUserQuery,
  useVerifyEmailQuery,
  useRegisterUserMutation,
  useAuthenticateUserMutation
} = authApi
