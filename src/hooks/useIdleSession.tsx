import { useEffect } from 'react'
import { useIdle } from '@uidotdev/usehooks'

import { createNotification } from 'store/client'
import { useLogoutMutation } from 'store/server'

import { useAppDispatch } from 'hooks/useRedux'

const IDLE_TIME = 30 // minutes
const preparedIdleTime = IDLE_TIME * 60 * 1000 // milliseconds

export const useIdleSession = () => {
  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()
  const isIdle = useIdle(preparedIdleTime)

  const handleLogout = async () => {
    await logout()
    dispatch(createNotification('Session expired.'))
  }

  useEffect(() => {
    if (isIdle) {
      void handleLogout()
    }
  }, [isIdle])
}
