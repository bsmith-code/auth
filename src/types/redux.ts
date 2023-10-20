// Common
import { dispatch, reducer } from 'store'
import { ListenerEffectAPI, TypedStartListening } from '@reduxjs/toolkit'

export type TAppDispatch = typeof dispatch
export type IRootState = ReturnType<typeof reducer>

export type TAppStartListening = TypedStartListening<IRootState, TAppDispatch>
export type TAppListenerAPI = ListenerEffectAPI<IRootState, TAppDispatch>
