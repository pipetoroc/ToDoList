import React from "react";
import "./CreateToDoButton.css";
import { ToDoContext } from "../ToDoContext";

function CreateToDoButton(props) {

  const addTask = () => {
    props.setOpenModal(prevState => !prevState);
  };
  return (
    <button
      className="add-button"
      onClick={addTask}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
