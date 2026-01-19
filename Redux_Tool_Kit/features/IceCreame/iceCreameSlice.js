const {createSlice} = require('@reduxjs/toolkit')

const initialState={
    numOfIceCreame:15
}

const iceCreameSlice = createSlice({
    name:"icecreame",
    initialState,
    reducers:{
        ordered:(state)=>{state.numOfIceCreame--},
        restock:(state,action)=>{state.numOfIceCreame+=action.payload}
    }
})

module.exports = {
    iceCreameReducer:iceCreameSlice.reducer,
    iceCreameAction:iceCreameSlice.actions
}