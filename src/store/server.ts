// Common
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Types
import { IUser } from 'types'

export const authApi = createApi({
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

export const { useGetUserQuery, useLoginMutation, useCreateUserMutation } =
  authApi
