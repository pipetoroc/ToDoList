import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { ToDoItem } from "../components/ToDoItem";
import { MainTitle } from "../components/MainTitle";

function AppUi({
  error,
  loading,
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}) {
  return (
    <React.Fragment>
      <MainTitle />
      <ToDoCounter
        total={totalToDos}
        completed={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no deseperes</p>}
        {(!loading && !searchedToDos.length)&& <p>Crea tu primer Tarea</p>}

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
      <CreateToDoButton />
    </React.Fragment>
  );
}

export {AppUi}
