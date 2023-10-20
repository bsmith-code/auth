// Common
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Middleware
import { listenerMiddleware } from 'store/middleware'

// Server
import { authReducer, authMiddleware, authReducerPath } from 'store/server'

// Client
import { appReducer } from 'store/client'

export const reducer = combineReducers({
  app: appReducer,
  [authReducerPath]: authReducer
})

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      // eslint-disable-next-line unicorn/prefer-spread
      .concat(authMiddleware)
})

export const { dispatch, getState } = store
export default store
