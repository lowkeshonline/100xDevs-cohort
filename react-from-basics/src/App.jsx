import React, { useEffect, useState } from "react"

function App() {

  
  const [currTab , setCurrTab] = useState("Home");

  
  

  return(
    <div>
      <button onClick={() => {
        setCurrTab("Home")
      }}>Home</button>
      <button onClick={() => {
        setCurrTab("Feed")
      }}>Feed</button>
      <button onClick={() => {
        setCurrTab("Settings")
      }}>Settings</button>
      <p>{currTab}</p>
    </div>
  )
}

export default App
