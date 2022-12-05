import React from "react";
import { ToDoContext } from "../components/ToDoContext";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { ToDoItem } from "../components/ToDoItem";
import { ToDoForm } from "../components/ToDoForm";
import { MainTitle } from "../components/MainTitle";
import { Modal } from "../components/Modal";
import Header from "../components/Header/Header";

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
      <Header/>
      <MainTitle />
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
      >
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
