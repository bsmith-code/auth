// Common
import { Action } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Store
import { createNotification } from 'store/client'

// Types
import { IUser, TAppListenerAPI } from 'types'

const authApi = createApi({
  reducerPath: 'contact',
  tagTypes: ['IUser'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL ?? ''}/v1/auth`,
    credentials: 'include'
  }),
  endpoints: build => ({
    login: build.mutation<IUser, Pick<IUser, 'email' | 'password'>>({
      query: body => ({
        url: 'login',
        method: 'POST',
        body
      })
    }),
    register: build.mutation<
      IUser,
      Omit<IUser, 'uuid' | 'createdAt' | 'updatedAt'>
    >({
      query: body => ({
        url: 'register',
        method: 'POST',
        body
      })
    }),
    session: build.query<IUser, void>({
      query: () => 'session'
    }),
    verify: build.query<void, string>({
      query: id => `verify/${id}`
    })
  })
})

export const {
  reducer: authReducer,
  endpoints: authEndpoints,
  middleware: authMiddleware,
  reducerPath: authReducerPath,

  useVerifyQuery,
  useSessionQuery,
  useLoginMutation,
  useRegisterMutation
} = authApi

export const authListeners = [
  {
    matcher: authEndpoints.register.matchFulfilled,
    effect: (_: Action, { dispatch }: TAppListenerAPI) => {
      dispatch(createNotification('Please verify your email.'))
    }
  },
  {
    matcher: authEndpoints.verify.matchFulfilled,
    effect: (_: Action, { dispatch }: TAppListenerAPI) => {
      dispatch(createNotification('User verified.'))
    }
  }
]
