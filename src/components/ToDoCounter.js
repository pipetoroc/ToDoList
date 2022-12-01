import React from "react";
import "../styles/ToDoCounter.css";
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
  const { totalToDos, completedToDos } = React.useContext(ToDoContext);

  if(totalToDos === 0){
    return (
      <h2 className="to-do-title"> You don't have task to do </h2>
    )
  }  
  return (
    <h2 className="to-do-title" >
      You've completed {completedToDos} tasks, you still have to do {totalToDos} more
    </h2>
  );
}

export { ToDoCounter };
