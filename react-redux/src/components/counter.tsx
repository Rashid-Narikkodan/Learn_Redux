import { useDispatch,useSelector } from "react-redux"
import type { CounterState } from "../reducers/counterReducer"
const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector<CounterState>((state)=>state.value)
  return (
 <div className="card">
        <button onClick={() => dispatch({type:'dec'})}>
          -
        </button>
          <p>
            count is {typeof value == 'number' && value}
          </p> 
        <button onClick={() => dispatch({type:'inc'})}>
          +
        </button>
        <p>
        </p>
      </div>  )
}

export default Counter