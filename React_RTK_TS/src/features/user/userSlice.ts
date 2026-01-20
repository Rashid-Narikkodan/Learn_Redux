import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User={
    id:number,
    name:string
}

type InitialState={
    loading:boolean;
    data:User[]
    error:string
}

const initialState:InitialState={
    loading:true,
    data:[],
    error:''
}


//now we can craete a thunk async function to do api call or any side effects
export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      return res.data
    }catch (err: unknown) {
        if (err instanceof Error) {
        return rejectWithValue(err.message)
    }

  return rejectWithValue('Failed to fetch users')
}
  }
)
// createAsyncThunk generate penidng,fullfilled,rejected


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })

        builder.addCase(fetchUsers.fulfilled,(state,action:PayloadAction<User[]>)=>{
            state.loading=false
            state.data = action.payload
            state.error=''
        })
        
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.data = []
            state.error=action?.error?.message||'Something went wrong'
        })
    }
})

export default userSlice.reducer
