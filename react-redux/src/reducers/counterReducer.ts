export type CounterState = {
    value:number
}
type CounterAction =
  | { type: "inc" }
  | { type: "dec" }

const initialState: CounterState = {
  value: 0
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
    default:
      return state
  }
}
