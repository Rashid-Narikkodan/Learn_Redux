import { ordered, restock } from "./iceCreameSlice"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const IceCreame = () => {
  const iceCreame = useAppSelector(state=>state.iceCreame)
  const dispatch = useAppDispatch()
  const [value,setValue] = useState(0)
  return (
    <>
    <input type="text" onChange={(e)=>setValue(Number(e.target.value))} />
    <div>IceCreame - {iceCreame.numOfIceCreame}</div>
    <br />
    <button onClick={()=>dispatch(ordered())}>Order - </button>
    <button onClick={()=>dispatch(restock(value))}>Restock - </button>
    </>
  )
}

export default IceCreame