const { configureStore } = require("@reduxjs/toolkit")
const { cakeReducer } = require("../features/Cake/cakeSlice.js")
const { iceCreameReducer } = require("../features/IceCreame/iceCreameSlice.js")

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame:iceCreameReducer
  }
})

module.exports = store
