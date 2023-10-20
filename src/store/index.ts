// Common
import { configureStore } from '@reduxjs/toolkit'

// Slices
import { authApi } from 'store/server'

export const { reducer, middleware, reducerPath } = authApi

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
