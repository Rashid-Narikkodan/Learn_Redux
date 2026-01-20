import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from '../features/Cake/cakeSlice'
import iceCreameReducer from '../features/IceCreame/iceCreameSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame:iceCreameReducer,
    user:userReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
