import './App.css'
import { useRecoilValue } from 'recoil'
import { todoAtomFamily } from './atoms/headerAtoms'

function App() {

  return (
    <>
      <h1>Your Todo-List</h1>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={3}/>
      <Todo id={4}/>
    </>
  )
}

function Todo({id}) {

  const todo = useRecoilValue(todoAtomFamily(id));

  return(
    <> 
      <div>{todo.title}</div>
      <div>{todo.completed ? "Finished" : "Unfinished"}</div>
      <div>{todo.dueDate}</div>
      <br></br>
    </>
  )
}

export default App
