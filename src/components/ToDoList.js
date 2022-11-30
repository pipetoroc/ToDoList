import React from "react";
import "../styles/ToDoList.css";

function ToDoList({ error, loading, searchedToDos, children }) {
  return (
    <section>
      <h3 className="list-title"> Tasks To Do </h3>
      {error && <p>Desesperate, hubo un error</p>}
      {loading && <p>Estamos cargando, no deseperes</p>}
      {!loading && !searchedToDos.length && (
        <div>
          <div className="icon-task" src="https://task-manager-gray-eight.vercel.app/static/media/empty_state_screen.1fc34be7.svg"></div>
          <p className="message-error">
            Oh! You don't have anything to do, You can create your first task.
          </p>
        </div>
      )}

      <ul className="todo-list">{children}</ul>
    </section>
  );
}

export { ToDoList };
