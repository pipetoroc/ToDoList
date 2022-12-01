import React from "react";
import "../styles/ToDoCounter.css";
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
  const { totalToDos, completedToDos } = React.useContext(ToDoContext);

  if(totalToDos === 0){
    return (
      <h2 className="to-do-title"> No tienes tareas pendientes </h2>
    )
  }  
  return (
    <h2 className="to-do-title" >
      Has completado {completedToDos} de tus {totalToDos} tareas pendientes
    </h2>
  );
}

export { ToDoCounter };
