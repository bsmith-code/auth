// Common
import {
  isAnyOf,
  AnyAction,
  isRejected,
  createListenerMiddleware
} from '@reduxjs/toolkit'

// Store
import { createNotification } from 'store/client'
import { authEndpoints, authListeners } from 'store/server'

// Types
import { TAppListenerAPI, TAppStartListening } from 'types'

const ignoredActions = isAnyOf(authEndpoints.session.matchRejected)

export const exceptionListeners = [
  {
    matcher: (action: AnyAction) =>
      ignoredActions(action) ? false : isRejected(action),
    effect: (
      action: {
        payload?: { data: { message: string } }
      },
      { dispatch }: TAppListenerAPI
    ) => {
      const message = action.payload?.data?.message ?? 'Something went wrong.'

      if (message) {
        dispatch(createNotification(message))
      }
    }
  }
]

export const listenerMiddleware = createListenerMiddleware()

const startAppListening =
  listenerMiddleware.startListening as TAppStartListening

const listeners = [...exceptionListeners, ...authListeners]

listeners.forEach(listener => {
  startAppListening(listener as never) // TODO: figure out type
})
