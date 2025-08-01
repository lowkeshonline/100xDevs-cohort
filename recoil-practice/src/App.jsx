
import { useState } from 'react';
import './App.css'
import { RecoilRoot, useRecoilValue , atom } from 'recoil';
import { counterAtom } from './store/atoms/counter';

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

// Counter component

function Counter () {

  const counter = useRecoilValue(counterAtom);

  return (
    <>
      <div>Counter : {counter}</div>
      <Increase/>
      <Decrease/>
    </>
  ) 
}

// Increase component

function Increase () {

  return (
    <>
      <button>Increase</button>
    </>
  )
}


//Decrease component

function Decrease() {


  return(
    <>
      <button>Decrease</button>
    </>
  )
}


export default App