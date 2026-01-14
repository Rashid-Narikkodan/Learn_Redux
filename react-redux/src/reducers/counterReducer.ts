import { combineReducers } from "redux"

export type CounterState = {
    value:number
    showStatus:boolean
}
type CounterAction ={type:string,payload:boolean}

// const initialState: CounterState = {
//   value: 0,
//   showStatus: false
// }

export const counterReducer=combineReducers({ // it replaces the maual way of calling each rducers with state
  value:valueReducer,
  showStatus:showStatus,
})

// export function counterReducer(
//   state: CounterState = initialState,
//   action: CounterAction
// ): CounterState {
//   return {
//     value:valueReducer(state.value,action),
//     showStatus:showStatus(state.showStatus,action),
//   }
// }

function valueReducer(state:number=0,action:CounterAction){
   switch (action.type) {
    case "inc":
      return state+1
    case "dec":
      return state-1
    default:
      return state
  }
}
function showStatus(state:boolean=false,action:CounterAction){
   switch (action.type) {
    case "show":
      return action.payload
    default:
      return state
  }
}