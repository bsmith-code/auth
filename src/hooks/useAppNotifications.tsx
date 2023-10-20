import { useSnackbar } from 'notistack'
import { removeNotification, selectNotifications } from 'store/client'
import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from './useRedux'

export const useAppNotifications = () => {
  const dispatch = useAppDispatch()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const notifications = useAppSelector(selectNotifications, shallowEqual)

  useEffect(() => {
    Object.entries(notifications).forEach(([key, message]) => {
      if (message) {
        enqueueSnackbar(message, {
          key,
          onExited: () => {
            dispatch(removeNotification(key))
          }
        })
      }
    })
  }, [notifications])
}
