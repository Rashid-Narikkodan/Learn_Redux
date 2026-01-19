const { configureStore } = require("@reduxjs/toolkit")
const { cakeReducer } = require("../features/Cake/cakeSlice.js")
const { iceCreameReducer } = require("../features/IceCreame/iceCreameSlice.js")
const {logger} = require('redux-logger')
const { userReducer } = require("../features/user/userSlice.js")

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame:iceCreameReducer,
    user:userReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

})

module.exports = store
