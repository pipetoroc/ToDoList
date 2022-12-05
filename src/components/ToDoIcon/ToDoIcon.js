import React from 'react';
import "./ToDoIcon.css";
import {AiFillCheckCircle as CheckIcon} from "react-icons/ai";
import {AiFillDelete as DeleteIcon} from "react-icons/ai"

const iconTypes = {
  "check": color =>(<CheckIcon className='Icon-svg Icon-svg--check' fill={color} />),
  "delete": color =>(<DeleteIcon className='Icon-svg Icon-svg--delete' fill={color}/>),
};
function ToDoIcon({type, color, onClick}) {

  return (
    <span className={`Icon-container Icon-container--${type}`}
    onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { ToDoIcon } 