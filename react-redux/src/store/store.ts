import { legacy_createStore, applyMiddleware } from "redux"
import { combined } from "../reducers/counterReducer"
import logger from 'redux-logger'

export type RootState = ReturnType<typeof combined>

export const store = legacy_createStore(
  combined,
  applyMiddleware(logger)
)

export type AppDispatch = typeof store.dispatch
