// Common
import { isAnyOf, isRejected, createListenerMiddleware } from '@reduxjs/toolkit'

// Store
import { createNotification } from 'store/client'

// Types
import { TAppListenerAPI, TAppStartListening } from 'types'

const ignoredActions = isAnyOf()

export const exceptionListeners = [
  {
    matcher: isRejected,
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

const listeners = [...exceptionListeners]

listeners.forEach(listener => {
  startAppListening(listener as never) // TODO: figure out type
})
