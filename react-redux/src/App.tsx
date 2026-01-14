import Counter from "./components/counter";
import Border from "./components/Border";
import ShowStatus from "./components/showStatus";
import ComplexState from "./components/immer";

function App() {
  return (
<div className="
  bg-black min-h-screen w-full p-4 text-white
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
">
      <Border text="create redux store and use hooks(useSelector, useDispatch)">
        <Counter />
      </Border>
      <Border text="now we are using a single reducer to handle counter and this showstatus">
        <ShowStatus />
      </Border>
      <Border text="">
        -Now we need to use combineReducers, and create different reducers for different purposes, 
        <br/>
        <br/>
        -now we just created combineReducers and solit reducers,
        <br />
        <br />
        now
        we need to use action creaters to maintain action in dispatch
      </Border>
      <Border text="">
        <ComplexState />
      </Border>
    </div>
  );
}

export default App;
