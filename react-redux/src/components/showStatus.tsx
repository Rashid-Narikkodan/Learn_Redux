import { useDispatch, useSelector } from "react-redux"
import type { CounterState } from "../reducers/counterReducer"
import { show } from '../reducers/counterReducer'

const ShowStatus = () => {
    const val=useSelector<CounterState>(state=>state.showStatus)
    console.log(val)
    const dispatch = useDispatch()
    const handleCheck=()=>{
        dispatch(show(!val))//used action which created, so type error can avoid
    }
  return (
    <div className='flex flex-col'>
        <div className="flex gap-2 p-3 border border-white rounded" onClick={handleCheck}>
        <label htmlFor="" className="mr-2">show status</label>
        <input checked={typeof val == 'boolean' ? val : false} type="checkbox"/>
        </div>
        <div>
            {typeof val == 'boolean'&& val && <div className="text-green-300 border border-green-300 rounded p-3 mt-3">Status Showed</div>}
        </div>
    </div>
  )
}

export default ShowStatus