import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { ToDoItem } from "../components/ToDoItem";
import { ToDoForm } from "../components/ToDoForm";
import { MainTitle } from "../components/MainTitle";
import { Modal } from "../components/Modal";

function AppUi() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <MainTitle />
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no deseperes</p>}
        {!loading && !searchedToDos.length && <p>Crea tu primer Tarea</p>}

        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}

      <CreateToDoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUi };
