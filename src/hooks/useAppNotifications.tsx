// Common
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'

// Store
import { removeNotification, selectNotifications } from 'store/client'

// Hooks
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'

export const useAppNotifications = () => {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const notifications = useAppSelector(selectNotifications, shallowEqual)

  useEffect(() => {
    Object.entries(notifications).forEach(([key, message]) => {
      if (message) {
        enqueueSnackbar(message, {
          key,
          preventDuplicate: true,
          autoHideDuration: 3000,
          onExited: () => {
            dispatch(removeNotification(key))
          }
        })
      }
    })
  }, [notifications])
}
