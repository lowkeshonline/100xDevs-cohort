import React from "react";


function App (){

  let todos = [{
    title : "Go to college",
    status : true
  } , {
    title : "Go to office",
    status : false
  } , {
    title : "Do project",
    status : false
  }]

  const todoComponents = todos.map(todo => <TodoComponent title={todo.title} status={todo.status}></TodoComponent>)

  return (
    <div>
      {todoComponents}
    </div>
  )
}

function TodoComponent({title , status}){
  return (
    <div>
      {title} - {status ? "Complete" : "Pending"}
    </div>
  )
}


export default App