const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restoke: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

module.exports = {
  cakeReducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions
}
