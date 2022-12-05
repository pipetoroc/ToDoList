import React from "react";
import "./ToDoItem.css";
import {CompleteIcon} from '../ToDoIcon/CompleteIcon';
import {DeleteIcon} from '../ToDoIcon/CompleteIcon';


function ToDoItem(props) {

  return (
    <li className="ToDoItem">
      <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
      />
      <p
        className={`ToDoItem--text ${
          props.completed && "ToDoItem--text__complete"
        }`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { ToDoItem };
