// Common
import { dispatch, appReducer } from 'store'
import { ListenerEffectAPI, TypedStartListening } from '@reduxjs/toolkit'

export type TAppDispatch = typeof dispatch
export type IRootState = ReturnType<typeof appReducer>

export type TAppStartListening = TypedStartListening<IRootState, TAppDispatch>
export type TAppListenerAPI = ListenerEffectAPI<IRootState, TAppDispatch>
