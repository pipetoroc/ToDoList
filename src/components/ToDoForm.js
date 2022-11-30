import React from "react";
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = React.useState("");
  const { addToDo, setOpenModal } = React.useContext(ToDoContext);

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false)
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue)
    setOpenModal(false)
  };
  return (
    <form onSubmit={onSubmit}>
      <label> ... </label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Por Favor escribe aca tu tarea"
      />
      <div>
        <button
          onClick={onCancel}
          type="button">
          Cancelar
        </button>
        <button type="submit" onClick={onSubmit}>Agregar</button>
      </div>
    </form>
  );
}

export { ToDoForm };
