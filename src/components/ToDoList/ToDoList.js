import React from "react";
import "./ToDoList.css";

function ToDoList({ error, loading, searchedToDos, children }) {
  return (
    <section>
      <h3 className="list-title"> Tasks To Do </h3>
      {error && <p className="message-error">Desesperate, hubo un error</p>}
      {loading && <p className="message-error">Estamos cargando, no deseperes</p>}
      {!loading && !searchedToDos.length && (
        <div>
          <figure className="icon-task-container">
            <img className="icon-task"></img>
          </figure>
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
