import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css";

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
    <form className='form-container' onSubmit={onSubmit}>
      <label> Please, write your duties </label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Por Favor escribe aca tu tarea"
      />
      <div className="button-container" >
        <button className="add-button add-button__cancel"
          onClick={onCancel}
          type="button">
          Cancel
        </button>
        <button className="add-button" type="submit" onClick={onSubmit}>Add</button>
      </div>
    </form>
  );
}

export { ToDoForm };
