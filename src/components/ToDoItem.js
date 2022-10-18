import React from "react";
import { InputCheck } from "./InputCheck";
import "../styles/ToDoItem.css"

function ToDoItem(props) {
  return (
    <li className="list">
      {/* <div className="list--div"> </div> */}
      <InputCheck/>
      <p className="list--p"> {props.text}</p>
      <span className="list--span"> X </span>
    </li>
  );
}

export { ToDoItem };
