import { useState } from 'react'
import './App.css'


function useCounter() {

  const [countState , setCountState] = useState(0);

  function increaseCount() {
    setCountState(prev => prev + 1);
  }

  return {
    countState : countState,
    increaseCount : increaseCount
  }

}


function App() {

  const {countState , increaseCount} = useCounter();

  return (
    <>
      <div className="card">
        <button onClick={increaseCount}>
          count is {countState}
        </button>
      </div>
    </>
  )
}

export default App
