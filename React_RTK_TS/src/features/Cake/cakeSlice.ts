import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type InitialState={
  numOfCakes:number
}

const initialState:InitialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restoke: (state, action:PayloadAction<number>) => {
      state.numOfCakes += action.payload
    }
  }
})

  export default cakeSlice.reducer
  export const {ordered,restoke} = cakeSlice.actions
