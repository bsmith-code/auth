// Common
import { Action } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Store
import { createNotification } from 'store/client'

// Types
import {
  IRootState,
  IUser,
  IUserLogin,
  IUserRegister,
  TAppListenerAPI
} from 'types'
import { IPermission } from 'types/permission'

const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['IUser'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL ?? ''}/v1/auth`,
    credentials: 'include'
  }),
  endpoints: build => ({
    login: build.mutation<IUser, IUserLogin>({
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
    register: build.mutation<IUser, IUserRegister>({
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
    }),
    getUsers: build.query<IUser[], void>({
      query: () => `users`
    }),
    updateUser: build.mutation<IUser, IUser>({
      query: ({ id, ...restUser }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: restUser
      })
    }),
    getPermissions: build.query<IPermission[], void>({
      query: () => 'permissions'
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
  useGetUsersQuery,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetPermissionsQuery
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
