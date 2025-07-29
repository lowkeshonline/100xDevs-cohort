import { useRef, useState } from "react"


function App() {
  // ---- Use Ref for Dom Reference ----

  // const inputRef = useRef(null);

  // function focusInput(){
  //   inputRef.current.focus();
  // }


  // return (
  //   <>
  //     <h2>Sign Up Form</h2>
  //     <input ref={inputRef} type="text" />
  //     <input type="text" />
  //     <button onClick={focusInput}>Submit</button>
  //   </>
  // )

  // --- UseRef for reference to value so that i persists across the re renders and also doesn't trigger a re-render just like state does
  
  const [count, setCount] = useState(0);
  const intervalRef = useRef(0);

  function startCounter () {
    let timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    intervalRef.current = timer;
  }

  function stopCounter () {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </>
  )
}

export default App
