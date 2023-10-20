// Store
import {
  selectNotifications,
  createNotification,
  removeNotification
} from 'store/client'

// MUI
import { Snackbar } from '@mui/material'

// Hooks
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { SyntheticEvent, useState } from 'react'

interface IAppNotificationProps {
  id: string
  message: string
}

const AppNotification = ({ id, message }: IAppNotificationProps) => {
  const dispatch = useAppDispatch()

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(removeNotification(id))
  }

  return (
    <Snackbar
      open
      message={message}
      autoHideDuration={6000}
      onClose={handleClose}
    />
  )
}

const AppNotifications = () => {
  const notifications = useAppSelector(selectNotifications)

  return (
    <>
      {Object.entries(notifications).map(([id, message]) => (
        <AppNotification key={`notification-${id}`} id={id} message={message} />
      ))}
    </>
  )
}

export default AppNotifications
