import { ListenerEffectAPI, TypedStartListening } from '@reduxjs/toolkit'

import { dispatch, reducer } from 'store'

export type TAppDispatch = typeof dispatch
export type IRootState = ReturnType<typeof reducer>

export type TAppStartListening = TypedStartListening<IRootState, TAppDispatch>
export type TAppListenerAPI = ListenerEffectAPI<IRootState, TAppDispatch>
