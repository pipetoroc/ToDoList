// import './App.css';
import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUi } from "./AppUi";

function App(props) {
  return (
    <ToDoProvider>
      <AppUi />
    </ToDoProvider>
  );
}

export default App;
