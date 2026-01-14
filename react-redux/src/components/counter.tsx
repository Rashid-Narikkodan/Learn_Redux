import { useDispatch, useSelector } from "react-redux";
import type { CounterState } from "../reducers/counterReducer";
import { increment, decrement } from "../reducers/counterReducer";
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector<CounterState>((state) => state.value);
  return (
    <div className="card flex gap-2">
      <button className="rounded-md p-4 border border-red-300 " onClick={() => dispatch(decrement())}>-</button>
      <p className="border p-5 rounded">count is {typeof value == "number" && value}</p>
      <button className="rounded-md p-4 border border-green-300"  onClick={() => dispatch(increment())}>+</button>
      <p></p>
    </div>
  );
};

export default Counter;
