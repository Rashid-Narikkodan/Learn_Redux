const { configureStore } = require("@reduxjs/toolkit")
const { cakeReducer } = require("../features/Cake/cakeSlice.js")
const { iceCreameReducer } = require("../features/IceCreame/iceCreameSlice.js")
const {logger} = require('redux-logger')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame:iceCreameReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

})

module.exports = store
