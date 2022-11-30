import React from "react";
import { useLocalStorage } from "./use-local-storage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedToDos = toDos.filter((toDos) => toDos.completed).length;
  const totalToDos = toDos.length;

  //Validando busqueda de toDos

  let searchedToDos = [];

  if (!searchValue >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
    });
    saveToDos(newToDos);
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);

    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);

    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        addToDo,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
      }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export {ToDoContext, ToDoProvider}

<ToDoContext.Consumer></ToDoContext.Consumer>;
