import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrder } from '../Cake/cakeSlice'

type InitialState={
    numOfIceCreame:number
}

const initialState:InitialState={
    numOfIceCreame:15
}

const iceCreameSlice = createSlice({
    name:"icecreame",
    initialState,
    reducers:{
        ordered:(state)=>{state.numOfIceCreame--},
        restock:(state,action:PayloadAction<number>)=>{state.numOfIceCreame+=action.payload}
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrder,(state)=>{state.numOfIceCreame--})
    }
})

export default iceCreameSlice.reducer

export const {ordered,restock} = iceCreameSlice.actions