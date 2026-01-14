import { legacy_createStore } from "redux"
import { counterReducer } from "../reducers/counterReducer"

export const store = legacy_createStore(counterReducer)

/* RootState type is derived from the store */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
