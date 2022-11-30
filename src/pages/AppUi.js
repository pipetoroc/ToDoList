import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { ToDoItem } from "../components/ToDoItem";
import { MainTitle } from "../components/MainTitle";

function AppUi() {
  return (
    <React.Fragment>
      <MainTitle />
      <ToDoCounter />
      <ToDoSearch />

      <ToDoContext.Consumer>
        {({ error, loading, searchedToDos, completeToDo, deleteToDo }) => (
          <ToDoList>
            {error && <p>Desesperate, hubo un error</p>}
            {loading && <p>Estamos cargando, no deseperes</p>}
            {!loading && !searchedToDos.length && <p>Crea tu primer Tarea</p>}

            {searchedToDos.map((toDo) => (
              <ToDoItem
                key={toDo.text}
                text={toDo.text}
                completed={toDo.completed}
                onComplete={() => completeToDo(toDo.text)}
                onDelete={() => deleteToDo(toDo.text)}
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUi };
