// import './App.css';
import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";
import { MainTitle } from "./components/MainTitle";

const toDo = [
  { text: "Almorzar", completed: true },
  { text: "ir a celebrar mi cumpleanos", completed: true },
  { text: "hacer algo diferente", completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <MainTitle/>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDo.map((toDo) => (
          <ToDoItem key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
