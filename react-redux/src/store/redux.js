import { legacy_createStore, applyMiddleware  } from "redux";
import axios from 'axios'

const FETCH_USER_LOADING = "FETCH_USER_LOADING"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_ERROR = "FETCH_USER_ERROR"


//action creaters
function fetchUserLoading(){
    return {
        type:FETCH_USER_LOADING
    }
}
function fetchUserSuccess(user){
    return {
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}
function fetchUserError(error){
    return {
        type:FETCH_USER_ERROR,
        payload:error
    }
}

//intial state
const initialState={
    loading:true,
    data:[],
    error:""
}

//Thunk middleware
const ThunkMiddleware=store=>next=>action=>{
    if(typeof action === 'function'){
        return action(store.dispatch,store.getState)
    }
    next(action)
}


//reducer, not combined
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_LOADING:
            return {
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCESS:
            return {
                loading:false,
                data:action.payload,
                error:''
            }

       case FETCH_USER_ERROR:
            return {
                loading:false,
                data:[],
                error:action.payload
            }
    }

}

function fetchUser(){
    return function(dispatch){
        dispatch(fetchUserLoading())
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            dispatch(fetchUserSuccess(res.data))
        }).catch((error)=>{
            dispatch(fetchUserError(error.message))
        })
    }
}

const store = legacy_createStore(reducer, applyMiddleware(ThunkMiddleware))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchUser())