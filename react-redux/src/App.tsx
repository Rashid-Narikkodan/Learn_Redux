import Counter from "./components/counter";
import Border from "./components/Border";
import ShowStatus from "./components/showStatus";
function App() {
  return (
    <div className="bg-black grid grid-cols-4 gap-2 w-full min-h-screen text-white p-2">
      <Border text="create redux store and use hooks(useSelector, useDispatch)">
        <Counter />
      </Border>
      <Border text="now we are using a single reducer to handle counter and this showstatus">
        <ShowStatus />
      </Border>
      <Border text="">
        Now we need to use combineReducers, and create different reducers for different purposes
      </Border>
    </div>
  );
}

export default App;
