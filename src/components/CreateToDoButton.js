import React from "react";
import "../styles/CreateToDoButton.css";

function CreateToDoButton() {
  const addTask = (msj) => {
    alert(msj);
  };
  return (
    <button
      className="add-button"
      onClick={() => addTask('Aca se esta construyendo algo')}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
