// Common
import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Types
import { IUser } from 'types'

const authApi = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL ?? ''}/v1/auth`
  }),
  endpoints: build => ({
    createUser: build.mutation<
      void,
      Omit<IUser, 'uuid' | 'createdAt' | 'updatedAt'>
    >({
      query: body => ({
        url: 'register',
        method: 'POST',
        body
      })
    })
  })
})

export const { useCreateUserMutation, reducerPath, reducer, middleware } =
  authApi

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
