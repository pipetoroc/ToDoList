import React, { useState } from "react";
import "./ToDoSearch.css";
import { ToDoContext } from "../ToDoContext";

function ToDoSearch() {
  const {searchValue, setSearchValue, totalToDos} = React.useContext(ToDoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  if (totalToDos === 0){
    return <div></div>
  }
  return (
    <input
      className="input-search"
      placeholder="Filtra tus tareas"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };