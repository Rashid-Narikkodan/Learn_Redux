import { useSelector, useDispatch } from "react-redux"
import { ordered,restoke } from "./cakeSlice"

const Cake = () => {
  const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
  const dispatch=useDispatch()
  

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
