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

const clientSlice = createSlice({
  name: 'client',
  reducers,
  initialState
})

export const {
  reducer: clientReducer,
  actions: { updateNotifications }
} = clientSlice
