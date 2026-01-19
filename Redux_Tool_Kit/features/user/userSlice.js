const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')
const axios = require('axios')

const initialState={
    loading:true,
    data:[],
    error:''
}


//now we can craete a thunk async function to do api call or any side effects
const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      return res.data
    } catch (err) {
      return rejectWithValue('Failed to fetch users')
    }
  }
)
// createAsyncThunk generate penidng,fullfilled,rejected


const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.data = action.payload
            state.error=''
        })
        
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.data = []
            state.error=action.error.message
        })
    }
})

module.exports = {
    userReducer:userSlice.reducer,
    fetchUsers
}
