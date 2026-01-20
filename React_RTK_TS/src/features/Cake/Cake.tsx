import { ordered,restoke } from "./cakeSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const Cake = () => {
  const numOfCakes = useAppSelector((state)=>state.cake.numOfCakes)
  const dispatch=useAppDispatch()
  

  const handleOrder=()=>{
    dispatch(ordered())
  }
  const handleRestock=()=>{
    dispatch(restoke(3))
  }

  return (
    <>
    <div>Number of cakes - {numOfCakes}</div>
    <br />
    <button onClick={handleOrder}>Order cake</button>
    <button onClick={handleRestock}>Restock cakes</button>
    </>
  )
}

export default Cake
