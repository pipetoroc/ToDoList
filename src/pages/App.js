// import './App.css';
import React from "react";
import { ToDoProvider } from "../components/ToDoContext";
import { AppUi } from "./AppUi";

function App() {
  return (
    <ToDoProvider>
      <AppUi />
    </ToDoProvider>
  );
}

export default App;
