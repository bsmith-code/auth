// Common
import { Action } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Store
import { createNotification } from 'store/client'

// Types
import { IRootState, IUser, TAppListenerAPI } from 'types'

const authApi = createApi({
  reducerPath: 'auth',
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
      }),
      invalidatesTags: result => (result ? ['IUser'] : [])
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST'
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
      query: () => 'session',
      providesTags: ['IUser']
    }),
    verify: build.query<void, string>({
      query: id => `verify/${id}`
    })
  })
})

export const {
  util: authUtil,
  reducer: authReducer,
  endpoints: authEndpoints,
  middleware: authMiddleware,
  reducerPath: authReducerPath,

  useVerifyQuery,
  useSessionQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation
} = authApi

export const authListeners = [
  {
    matcher: authEndpoints.logout.matchFulfilled,
    effect: (_: Action, { dispatch }: TAppListenerAPI) => {
      dispatch(authUtil.resetApiState())
    }
  },
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

export const selectUser = (state: IRootState) =>
  authEndpoints.session.select()(state).data
