// Common
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Server
import { authApi } from 'store/server'

// Client
import { clientReducer } from 'store/client'

export const { reducer, middleware, reducerPath } = authApi

export const appReducer = combineReducers({
  client: clientReducer,
  [reducerPath]: reducer
})

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    // eslint-disable-next-line unicorn/prefer-spread
    getDefaultMiddleware().concat(middleware)
})

export const { dispatch, getState } = store
export default store
