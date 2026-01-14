import './style/App.css'
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store/store"

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


function App() {

  const value = useAppSelector((state)=>state.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch({type:'dec'})}>
          -
        </button>
          <p>
            count is {value}
          </p> 
        <button onClick={() => dispatch({type:'inc'})}>
          +
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
