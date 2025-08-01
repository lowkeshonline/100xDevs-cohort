import { useEffect, useState } from 'react'
import './App.css'


function App() {

  return (
    <>
      <Counter/>
      <Counter/>
      <Counter/>  
    </>
  )
}

function Counter () {
  const [count , setCount] = useState(0); 

  function increase () {
    setCount (count => count + 1);
  }

  return (
    <button onClick={increase}>Count is {count} </button>
  )
}

export default App
