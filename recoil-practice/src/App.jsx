
import { useEffect, useState , memo } from 'react';
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';

function App() {


  return (
    <>
      <RecoilRoot>
        <Counter/>
        <Increase/>
        <Decrease/>
      </RecoilRoot>
    </>
  )
}

// Counter component

function Counter () {

  const state = useRecoilValue(counterAtom);

  return (
    <>
      <div>Counter : { state }</div>
    </>
  ) 
}

// Increase component

function Increase () {

  const setState = useSetRecoilState(counterAtom);

  return (
    <>
      <button onClick={() => {setState(prev => prev + 1)}}>Increase</button>
    </>
  )
};


//Decrease component

function Decrease () {

  const setState = useSetRecoilState(counterAtom);

  return(
    <>
      <button onClick={() => {setState(prev => prev - 1)}}>Decrease</button>
    </>
  )
}


export default App