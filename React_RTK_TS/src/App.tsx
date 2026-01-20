import './App.css'
import Cake from './features/Cake/Cake'
import IceCreame from './features/IceCreame/IceCreame'
import User from './features/user/User'

function App() {

  return (
    <>
      <div>
        <Cake />
      </div>
      <h1></h1>
      <div className="card">
        <IceCreame />
    
      </div>
     <User />
    </>
  )
}

export default App
