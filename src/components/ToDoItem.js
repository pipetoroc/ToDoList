import React from "react";
// import { InputCheck } from "./InputCheck";
import "../styles/ToDoItem.css";

function ToDoItem(props) {

  return (
    <li className="ToDoItem">
      <span
        className={`ToDoItem--icon ToDoItem--icon-check ${
          props.completed && "ToDoItem--icon-check__active"
        }`}
        onClick={props.onComplete}
      ></span>
      <p
        className={`ToDoItem--text ${
          props.completed && "ToDoItem--text__complete"
        }`}
      >
        {props.text}
      </p>
      <span
        className="ToDoItem--icon ToDoItem--icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { ToDoItem };
