import { legacy_createStore, applyMiddleware } from "redux"
import { combined } from "../reducers/counterReducer"
import testMiddleware from "./middleware/testMiddleware"


// export type RootState = ReturnType<typeof combined>

export const store = legacy_createStore(
  combined,
  applyMiddleware(testMiddleware)
)

// export type AppDispatch = typeof store.dispatch
