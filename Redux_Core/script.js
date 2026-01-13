// ----- REDUX CORE -----
function createStore(reducer) {
  let state=undefined;
  let listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(l => l())
  }

  function subscribe(listener) {
    listeners.push(listener)
  }

  dispatch({ type: null })

  return { getState, dispatch, subscribe }
}
// dont need to write, redux package provide it as import {createStore}


// Actual use of redux basically without react

// Step - 1
const initialState={ // create a initialState to set in state of redux
    value:0
}

// Step - 2
const reducer=(prevState=initialState,action)=>{ // create a reducer function to handle what to update in state of redux based on conditions  
    switch(action.type){
        case 'inc':
            return {...prevState,value:prevState.value + 1}
        case 'dec':
            return {...prevState,value:prevState.value - 1}
        default:
          return prevState
    }
}

// Step - 3 
const store = createStore(reducer) // create a redux store and pass the reducer function as argument

// Step - 4
const state = store.getState() // to get state of the store we created

// Step - 5
store.subscribe(()=>{ // call for subscribe the changes, we pass a callback func, to perform something that uses this state
    document.getElementById('count').innerHTML = store.getState().value
})

// use dispatch when a event triggered, or a change needed in state
document.getElementById('inc').onclick=()=>{
  store.dispatch({type:'inc'})
}
document.getElementById('dec').onclick=()=>{
  store.dispatch({type:'dec'})
} 