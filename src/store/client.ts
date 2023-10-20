import uniqid from 'uniqid'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IClientState {
  notifications: { message: string; key: string }[]
}
const initialState: IClientState = {
  notifications: []
}

const reducers = {
  updateNotifications: (
    state: IClientState,
    action: PayloadAction<{ message: string }>
  ) => {
    state.notifications = [
      ...state.notifications,
      {
        message: `${action?.payload?.message}`,
        key: uniqid()
      }
    ]
  }
}

export const appSlice = createSlice({
  name: 'app',
  reducers,
  initialState
})
