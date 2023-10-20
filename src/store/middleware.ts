// Common
import { isAnyOf, isRejected, AnyAction } from '@reduxjs/toolkit'
import { updateNotifications } from 'store/client'
import { TAppListenerAPI } from 'types'

const ignoredActions = isAnyOf()

export const exceptionListeners = [
  {
    matcher: isRejected,
    effect: (
      action: {
        meta: {
          arg?: {
            type?: 'query' | 'mutation'
          }
        }
        payload?: string
        error: { message: string }
      },
      { dispatch }: TAppListenerAPI
    ) => {
      const {
        error,
        payload,
        meta: { arg = {} }
      } = action ?? {}

      let message = ''
      if (arg.type === 'query' || arg.type === 'mutation') {
        if (payload) {
          message = payload
        }
      } else {
        message = error.message
      }

      if (message) {
        dispatch(updateNotifications({ message }))
      }
    }
  }
]
