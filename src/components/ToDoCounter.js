import React from "react";
import "../styles/ToDoCounter.css"

function ToDoCounter({total, completed }) {
  return <h2 className="to-do-title"> Has completado {completed} de tus {total} tareas pendientes </h2>;
}

export { ToDoCounter };
