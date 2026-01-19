const {createSlice} = require('@reduxjs/toolkit')
const {cakeActions}   = require('../Cake/cakeSlice')

const initialState={
    numOfIceCreame:15
}

const iceCreameSlice = createSlice({
    name:"icecreame",
    initialState,
    reducers:{
        ordered:(state)=>{state.numOfIceCreame--},
        restock:(state,action)=>{state.numOfIceCreame+=action.payload}
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state)=>{state.numOfIceCreame--})
    }
})

module.exports = {
    iceCreameReducer:iceCreameSlice.reducer,
    iceCreameAction:iceCreameSlice.actions
}