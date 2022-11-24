// import './App.css';
import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";
import { MainTitle } from "./components/MainTitle";

const defaulttoDo = [
  { text: "Almorzar", completed: false },
  { text: "ir a celebrar mi cumpleanos", completed: false },
  { text: "hacer algo diferente", completed: true },
];

function App(props) {
  const [toDos, setToDos] = React.useState(defaulttoDo);
  const [searchValue, setSearchValue] = React.useState("");

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
  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text );

    const newToDos = [...toDos];
    newToDos[toDoIndex].completed=true;
    setToDos(newToDos);
  };
  
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text );

    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  };


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
        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete = {() => completeToDo(toDo.text) }
            onDelete = {() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
