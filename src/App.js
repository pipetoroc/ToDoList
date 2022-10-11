// import './App.css';
import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";

const toDo = [
  { text: "Almorzor", completed: false },
  { text: "ir a celebrar mi cumpleanos", completed: false },
  { text: "hacer algo diferente", completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDo.map((task) => (
          <ToDoItem key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
