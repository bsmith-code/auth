import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'store/client'
import { listenerMiddleware } from 'store/middleware'
import { authMiddleware, authReducer, authReducerPath } from 'store/server'

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
