export type CounterState = {
    value:number
    showStatus:boolean
}
type CounterAction ={type:string,payload:boolean}

const initialState: CounterState = {
  value: 0,
  showStatus: false
}

export function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "inc":
      return { ...state, value: state.value + 1 }
    case "dec":
      return { ...state, value: state.value - 1 }
    case "show":
      return { ...state, showStatus: action.payload }
    default:
      return state
  }
}
