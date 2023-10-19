// Common
import { configureStore } from '@reduxjs/toolkit'
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
    login: build.mutation<IUser, Pick<IUser, 'email' | 'password'>>({
      query: body => ({
        url: 'login',
        method: 'POST',
        body
      }),
      invalidatesTags: ['IUser']
    }),
    createUser: build.mutation<
      IUser,
      Omit<IUser, 'uuid' | 'createdAt' | 'updatedAt'>
    >({
      query: body => ({
        url: 'register',
        method: 'POST',
        body
      })
    }),
    getUser: build.query<IUser, void>({
      query: () => 'status',
      providesTags: ['IUser']
    })
  })
})

export const {
  reducer,
  middleware,
  reducerPath,
  useGetUserQuery,
  useLoginMutation,
  useCreateUserMutation
} = authApi

const appReducer = {
  [reducerPath]: reducer
}

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    // eslint-disable-next-line unicorn/prefer-spread
    getDefaultMiddleware().concat(middleware)
})

export default store
