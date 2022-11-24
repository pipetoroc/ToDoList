import React, { useState } from "react";
import "../styles/ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="input-search"
      placeholder="Escribe una tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };
